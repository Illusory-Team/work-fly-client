import axios, { AxiosResponse } from 'axios';
import { setCookie } from 'cookies-next';
import { NextPageContext } from 'next';

import { api } from '@/shared/api';
import { LOGIN_PATH, isAuthPath } from '@/shared/config/paths';
import { redirectSSR } from '@/shared/config/redirectSSR';
import { errorCatch } from '@/shared/helpers/errorCatch';
import { logger } from '@/shared/helpers/logger';

import { IFormLogin, UserResponse } from '../types';

export const AuthService = {
	async login(loginData: IFormLogin) {
		try {
			const response = await axios.post<UserResponse>('/api/v2/auth/login', loginData, {
				withCredentials: true,
			});
			api.defaults.headers.common['x-csrf-token'] = response.data.csrfToken;

			return response;
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				logger({ type: 'error', message: errorCatch(error) });
			}
		}
	},
	async refreshToken(ctx?: NextPageContext): Promise<AxiosResponse<UserResponse> | undefined> {
		if (!!ctx) {
			const { req, res, asPath } = ctx;

			try {
				api.defaults.headers.cookie = req?.headers.cookie as string;

				const response = await api.get<UserResponse>('/auth/refresh');

				if (response.headers['set-cookie']) {
					const cookies = response.headers['set-cookie'];

					cookies.forEach((cookieStr: string) => {
						const [name, value] = cookieStr.split(';')[0].split('=');
						const maxAge = cookieStr.split(';')[1].split('=')[1];

						if (name === 'refreshToken' || name === 'accessToken') {
							setCookie(name, value, { res, req, httpOnly: true, maxAge: Number(maxAge) });
						}
					});
				}

				return response;
			} catch (error: unknown) {
				if (axios.isAxiosError(error)) {
					logger({ type: 'error', message: errorCatch(error) });

					if (error?.response?.data.message === 'Unauthorized' && !isAuthPath(asPath)) {
						redirectSSR(LOGIN_PATH, res);
					}

					return;
				}
			}
		}

		return await api.get<UserResponse>('/auth/refresh');
	},
	async logout() {
		await api.patch('/auth/logout');
	},
};
