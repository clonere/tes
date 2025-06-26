import axios from 'axios';

axios.defaults.baseURL = 'https://tes-production-1444.up.railway.app/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
