import axios from "axios";

const uri = "savemypressurizer-api-ld9o.onrender.com/"
export const api = axios.create({
  baseURL: "https://" + uri
})

export const socket = new WebSocket("wss://" + uri)