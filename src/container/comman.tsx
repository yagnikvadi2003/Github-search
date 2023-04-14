import axios, { AxiosInstance } from 'axios';

/*
* Create a new instance of Axios
* 
* If you are using different URLs, consider removing this line and adding a baseURL in the Axios Config parameter. 
*/
export const api: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    "Content-type": "application/json"
  }
});