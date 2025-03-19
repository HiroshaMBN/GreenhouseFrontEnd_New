import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.example.com/', // replace with your API base URL
  timeout: 10000, // optional: timeout for requests
});

export default instance;
