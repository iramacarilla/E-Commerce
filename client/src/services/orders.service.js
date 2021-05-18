import axios from "../utils/axios";

export const createOrder = (payload) => {
  return axios.post("/orders", payload);
};
/*export const getApp = () => {
  return axios.get("/orders");
};*/
