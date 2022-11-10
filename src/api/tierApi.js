import axios from "../config/axios";

export const getAllTiers = () => axios.get("/tiers");
