import axios from "../config/axios";

export const buySubscription = (data) => axios.post("/payment", data);
