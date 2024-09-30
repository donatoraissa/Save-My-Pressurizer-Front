import axios from "axios";

const uri = "savemypressurizer-api.onrender.com/"

export const api = axios.create({
  baseURL: "https://" + uri
})

export const socket = new WebSocket("ws://" + uri)