import axios from 'axios';
import { BACKEND_URL } from '../constants/api';
import { asyncLocalStorage } from '../utils/localStorage';

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 30_000,
});

// Add a request interceptor
api.interceptors.request.use(async (config: any) => {
  const token = await asyncLocalStorage.getItem('token') ?? null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;