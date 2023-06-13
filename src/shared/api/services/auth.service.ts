import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { setCookie } from 'cookies-next';
import { NextPageContext } from 'next';

import { LOGIN_PATH, isAuthPath } from '@/shared/config/paths';
import { redirectSSR } from '@/shared/config/redirectSSR';
import { errorCatch } from '@/shared/lib/helpers/errorCatch';
import { logger } from '@/shared/lib/helpers/logger';

import { fakeApi } from '../instance';
import { IUserLogin, UserResponse } from '../types';

class AuthService {
	api: AxiosInstance;
	constructor() {
		this.api = fakeApi;
	}

	async login(loginData: IUserLogin) {
		try {
			const { data } = await this.api.post<UserResponse>('/auth/login', loginData);
			this.api.defaults.headers.common['x-csrf-token'] = data.csrfToken;

			return data;
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				logger({ type: 'error', message: errorCatch(error) });
			}
		}
	}

	async refreshToken(ctx?: NextPageContext): Promise<AxiosResponse<UserResponse> | undefined> {
		if (!!ctx) {
			const { req, res, asPath } = ctx;

			try {
				this.api.defaults.headers.cookie = req?.headers.cookie as string;

				const response = await this.api.get<UserResponse>('/auth/refresh');

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

		return await this.api.get<UserResponse>('/auth/refresh');
	}

	async logout() {
		await this.api.patch('/auth/logout');
	}
}

export const authService = new AuthService();