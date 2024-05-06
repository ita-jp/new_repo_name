import api from './index';
import axios from "axios";

interface LoginCredentials {
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
    }
};
