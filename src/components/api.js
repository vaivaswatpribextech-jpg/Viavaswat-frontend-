// src/components/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
