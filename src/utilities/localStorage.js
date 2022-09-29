import { ANIMA_TOKEN } from '../config/constant';

export const addToken = (token) => localStorage.setItem(ANIMA_TOKEN, token);
export const getToken = () => localStorage.getItem(ANIMA_TOKEN);
export const removeToken = () => localStorage.removeItem(ANIMA_TOKEN);
