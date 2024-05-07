import api from './index';
import axios from "axios";

interface LoginCredentials {
    username: string;
    password: string;
}

interface RegisterRequest {
    email: string;
    username: string;
    password: string;
}

export const userService = {
    login: async (credentials: LoginCredentials): Promise<any> => {
        try {
            const response = await api.post('/api/login', credentials);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Login failed');
            } else {
                throw new Error('Network error');
            }
        }
    },

    register: async (req: RegisterRequest): Promise<any> => {
        try {
            const response = await api.post('/api/users', req);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Registration failed');
            } else {
                throw new Error('Network error');
            }
        }
    },

    me: async (): Promise<any> => {
        try {
            const response = await api.get('/api/users/me');
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Failed to fetch user');
            } else {
                throw new Error('Network error');
            }
        }
    },

    logout: async (): Promise<any> => {
        try {
            const response = await api.post('/api/logout');
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Logout failed');
            } else {
                throw new Error('Network error');
            }
        }
    }
};
