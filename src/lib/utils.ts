// api.ts
import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { getSession } from 'next-auth/react';

// Extend the InternalAxiosRequestConfig type instead
interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Properly type the request interceptor
api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        try {
            const session = await getSession();
            
            const newConfig: ExtendedAxiosRequestConfig = {
                ...config,
                headers: {
                    ...config.headers,
                } as any
            };
            
            if (session?.access_token) {
                newConfig.headers.Authorization = `Bearer ${session.access_token}`;
            }
            
            return newConfig;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Properly type the response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as ExtendedAxiosRequestConfig;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const session = await getSession();
                
                if (session?.access_token) {
                    originalRequest.headers = {
                        ...originalRequest.headers,
                        Authorization: `Bearer ${session.access_token}`,
                    } as any;
                    return api(originalRequest);
                }
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;