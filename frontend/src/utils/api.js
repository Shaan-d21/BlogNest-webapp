import axios from 'axios';

// 1. Define the base URL once
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4001';

// 2. Create the customized axios instance
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Ensures JWT/Cookies are sent automatically
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;