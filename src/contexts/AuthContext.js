import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../config/axios';
import { addToken, getToken, removeToken } from '../utilities/localStorage';
import { useLoading } from './LoadingContext';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const { startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        if (getToken()) {
          startLoading();
          await updateUser();
        }
      } catch (err) {
        toast.error(err.response.data.message);
      } finally {
        stopLoading();
      }
    };

    loadUser();
  }, [startLoading, stopLoading]);

  const updateUser = async () => {
    const res = await axios.get('/auth/getMe');
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await axios.post('/auth/register', input);
    addToken(res.data.token);
    updateUser();
  };

  const login = async (input) => {
    const res = await axios.post('auth/login', input);
    addToken(res.data.token);
    updateUser();
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
