import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://backend.cc.com.bd/api/v1";

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
