import axios from "axios";

export const api = axios.create({
  baseURL: "https://savemypressurizer-api.onrender.com"
})
