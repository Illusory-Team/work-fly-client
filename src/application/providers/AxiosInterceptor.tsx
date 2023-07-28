'use client';

import { AxiosError } from 'axios';
import { useEvent } from 'effector-react';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

import { $profileApi } from '@/entities/User/model/user.api';

import { api, authService } from '@/shared/api';
import { LOGIN_PATH } from '@/shared/config/paths';

export const AxiosInterceptor: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();

	const removeUser = useEvent($profileApi.removeProfile);

	const errorInterceptor = async (error: any) => {
		const originalConfig = error.config;

		if (error.response.status === 401 && !originalConfig._retry) {
			if (originalConfig.url === '/auth/refresh') {
				await router.push(LOGIN_PATH);

				removeUser();

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

	const interceptor = api.interceptors.response.use(res => res, errorInterceptor);
	useEffect(() => {
		return () => api.interceptors.response.eject(interceptor);
	}, []);

	return <>{children}</>;
};
