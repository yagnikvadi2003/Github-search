import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    "Content-type": "application/json"
  }
});