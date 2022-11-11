import { ANIMA_TOKEN, VPASS_TOKEN } from "../config/constant";

export const addToken = (token) => localStorage.setItem(ANIMA_TOKEN, token);
export const getToken = () => localStorage.getItem(ANIMA_TOKEN);
export const removeToken = () => localStorage.removeItem(ANIMA_TOKEN);

export const addVpassToken = (token) =>
  localStorage.setItem(VPASS_TOKEN, token);
export const getVpassToken = () => localStorage.getItem(VPASS_TOKEN);
export const removeVpassToken = () => localStorage.removeItem(VPASS_TOKEN);
