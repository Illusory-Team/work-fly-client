import { AxiosError, AxiosInstance } from 'axios';

import { User } from '@/shared/api';
import { userMapper } from '@/shared/api/mappers';
import { logger } from '@/shared/lib/helpers/logger';

import { api } from '../instance';

class UserService {
	api: AxiosInstance;
	constructor() {
		this.api = api;
	}

	async getUserProfile() {
		try {
			const response = await this.api.get<User>('/users/me');

			if (response) {
				return userMapper(response.data);
			}
		} catch (err) {
			const error = err as AxiosError;
			logger({ type: 'error', message: error.message });
		}
	}
}

export const userService = new UserService();
