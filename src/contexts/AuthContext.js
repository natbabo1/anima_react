import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLoading } from './LoadingContext';
import * as authService from '../api/authApi';
import { addToken, getToken, removeToken } from '../utilities/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const { startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        if (getToken()) {
          startLoading();
          await getThisUser();
        }
      } catch (err) {
        toast.error(err.response.data.message);
      } finally {
        stopLoading();
      }
    };

    loadUser();
  }, [startLoading, stopLoading]);

  const getThisUser = async () => {
    const res = await authService.getThisUser();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authService.register(input);
    addToken(res.data.token);
    getThisUser();
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addToken(res.data.token);
    getThisUser();
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
