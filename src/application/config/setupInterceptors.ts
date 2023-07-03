import { AxiosHeaders } from 'axios';

import { $profile } from '@/entities/User';

import { api, authService } from '@/shared/api';
import { LOGIN_PATH } from '@/shared/config/paths';

export const setupInterceptors = () => {
	api.interceptors.request.use(
		config => {
			const user = $profile.getState();

			// const token = user && user.csrfToken;
			const token = null;

			if (config.headers && token) {
				(config.headers as AxiosHeaders).set('x-csrf-token', token);
			}

			return config;
		},
		error => {
			return Promise.reject(error);
		},
	);

	api.interceptors.response.use(
		res => res,
		async error => {
			const originalConfig = error.config;

			if (originalConfig.url !== LOGIN_PATH && error.response) {
				if (error.response.status === 401 && !originalConfig._retry) {
					originalConfig._retry = true;

					try {
						const response = await authService.refreshToken();

						if (response) {
							$profile.updates(response.data);
						}

						return api(originalConfig);
					} catch (err) {
						return Promise.reject(err);
					}
				}
			}
		},
	);
};
