import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.1.6:3333'
}); 

export default api;