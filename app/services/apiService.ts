import axios from "axios";

export const http = axios.create({
  baseURL: `/api`,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
