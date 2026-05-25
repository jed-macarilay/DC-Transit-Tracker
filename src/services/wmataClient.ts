import axios from "axios";

const baseURL = "https://api.wmata.com";
const apiKey = import.meta.env.VITE_WMATA_API_KEY;

export const wmataClient = axios.create({
  baseURL,
  headers: apiKey ? { api_key: apiKey } : undefined
});
