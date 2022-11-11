import axios from "../config/axios";

export const getAllTiers = () => axios.get("/tiers");

export const getVpass = () => axios.get("tiers/vpass");
export const checkVpass = (vpass) => axios.post("/tiers/vpass", { vpass });
