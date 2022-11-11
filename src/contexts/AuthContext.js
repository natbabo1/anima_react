import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLoading } from "./LoadingContext";
import * as authService from "../api/authApi";
import {
  addToken,
  getToken,
  removeToken,
  removeVpassToken
} from "../utilities/localStorage";
import { useCallback } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const { startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState(false);

  const getThisUser = useCallback(async () => {
    const res = await authService.getThisUser();
    setUser(res.data.user);
  }, []);

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
  }, [startLoading, stopLoading, getThisUser]);

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
    removeVpassToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, getThisUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
