import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { env } from '@/schemas/env';
import { useAuthStore } from '@/stores/useAuthStore';

interface User {
  id: string;
  email: string;
}

// Instância principal usada no app
export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});

// Instância só para refresh (sem interceptores!)
const refreshApi = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});

// ----------------------
// Request Interceptor
// ----------------------
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ----------------------
// Response Interceptor
// ----------------------
let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originalRequest = err.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // só tenta refresh se for 401
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // se já está em refresh → espera o mesmo refresh
        if (!isRefreshing) {
          isRefreshing = true;
          refreshPromise = refreshApi
            .post('/refresh/token')
            .then((res) => {
              const { accessToken, user } = res.data as {
                accessToken: string;
                user: User;
              };
              useAuthStore.getState().setAccessToken(accessToken);
              useAuthStore.getState().setUser(user);
              return accessToken;
            })
            .catch(() => {
              useAuthStore.getState().logout();
              return null;
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        const newToken = await refreshPromise;
        if (!newToken) throw new Error('Refresh failed');

        // refaz a request original com novo token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch {
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);
