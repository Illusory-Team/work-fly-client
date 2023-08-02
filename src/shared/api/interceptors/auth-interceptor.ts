import { AxiosError, AxiosResponse } from 'axios';

import { api, authService } from '../';

export const responseInterceptor = (res: AxiosResponse): AxiosResponse => res;

export const errorResponseInterceptor = async (error: any) => {
	const originalConfig = error.config;

	if (error.response.status === 401 && !originalConfig._retry) {
		if (originalConfig.url === '/auth/refresh') {
			return Promise.reject(error);
		}

		originalConfig._retry = true;

		try {
			const token = await authService.refreshToken();

			if (token) {
				originalConfig.headers.Authorization = `Bearer ${token.accessToken}`;
			}

			return api(originalConfig);
		} catch (err) {
			const error = err as AxiosError;

			if (error.response && error.response.data) {
				return Promise.reject(error.response.data);
			}

			return Promise.reject(err);
		}
	}

	return Promise.reject(error);
};
