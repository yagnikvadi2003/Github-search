// Import the `axios` library and the `AxiosInstance` type from the `axios` package
import axios, { AxiosInstance } from 'axios';

// Create a new instance of `axios` with some default configuration options
export const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL?.trim() || '', // The base URL for all requests made with this instance
    headers: {
        "Content-type": "application/json"
    },
    timeout: 5000, // The maximum number of milliseconds to wait for a request to complete
});

export const API_URL = process.env.REACT_APP_API_URL?.trim() || '';