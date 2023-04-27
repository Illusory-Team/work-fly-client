import { AxiosHeaders } from 'axios';

import { setCurrentUser } from '@/entities/User/model/user.slice';

import { AuthService } from '@/features/Auth/services';

import { api } from '@/shared/api';
import { LOGIN_PATH } from '@/shared/config/paths';

export const setupInterceptors = (store: AppStore) => {
	api.interceptors.request.use(
		config => {
			const { userReducer } = store.getState();

			const token = userReducer.user && userReducer.user.csrfToken;

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
						const response = await AuthService.refreshToken();

						if (response) {
							store.dispatch(setCurrentUser(response?.data));
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
