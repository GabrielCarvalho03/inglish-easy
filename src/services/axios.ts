import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-ingles-ease.vercel.app",
});
