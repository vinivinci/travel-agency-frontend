import axios from 'axios';
import { Package } from '../interfaces/package';

const API_URL = 'http://localhost:3000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
    },
});

api.interceptors.response.use(async config => {
    if (config.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return config;
})

export const getTravelPackages = async () => {
    return api.get<Package[]>('travel-packages');
};

export const getTravelPackageById = async (id: number) => {
    return api.get<Package>(`travel-packages/${id}`);
};

export const getTravelPackagesByQuery = async (query: URLSearchParams) => {
    return api.get<Package[]>(`travel-packages/search/query?${query}`);
}



export default api;
