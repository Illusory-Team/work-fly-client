import axios, { AxiosInstance } from 'axios';

import { errorCatch } from '@/shared/lib/helpers/errorCatch';
import { logger } from '@/shared/lib/helpers/logger';

import { api } from '../instance';
import { userResponseMapper } from '../mappers';
import { AccessTokenResponse, AuthLoginRequest, AuthResponse, User } from '../types';

class AuthService {
	api: AxiosInstance;
	constructor() {
		this.api = api;
	}

	async login(loginData: AuthLoginRequest): Promise<User | undefined> {
		try {
			const { data } = await this.api.post<AuthResponse>('/auth/login', loginData);
			this.api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

			return userResponseMapper(data);
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				logger({ type: 'error', message: errorCatch(error) });
			}
		}
	}

	async refreshToken(): Promise<AccessTokenResponse | undefined> {
		try {
			const response = await this.api.get<AccessTokenResponse>('/auth/refresh');

			this.api.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;

			return response.data;
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				logger({ type: 'error', message: errorCatch(error) });

				if (error?.response?.data.message === 'jwt expired') {
				}

				return undefined;
			}
		}
	}

	async logout() {
		await this.api.patch('/auth/logout');
	}
}

export const authService = new AuthService();
