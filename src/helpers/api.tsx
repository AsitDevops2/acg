import axios from 'axios';
import { authHeader } from './auth-header';

// Create instance called instance
let fetch = axios.create({
    baseURL: 'http://localhost:8082/api/',
    timeout: 10000,
    headers: authHeader(),
});


export {fetch};


