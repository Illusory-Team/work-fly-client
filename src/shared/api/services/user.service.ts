import { AxiosInstance } from 'axios';

import { User } from '@/shared/api';

import { api } from '../instance';

class UserService {
	api: AxiosInstance;
	constructor() {
		this.api = api;
	}

	async getUserProfile() {
		return await this.api.get<User>('/users/me');
	}
}

export const userService = new UserService();
