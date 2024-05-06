import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
});

// Send request once to set XSRF-TOKEN cookie
api.get('/api/csrf-cookie').then(response => {
});

api.interceptors.request.use((config) => {
    const token = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='))?.split('=')[1];
    if (token) {
        config.headers['X-XSRF-TOKEN'] = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
