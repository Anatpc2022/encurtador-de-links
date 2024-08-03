import axios from "axios";

export const key = "0d5b7e8bb6ef7ad436024981068d88fc21cbc8f2";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
