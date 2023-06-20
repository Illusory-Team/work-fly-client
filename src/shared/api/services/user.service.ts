import { AxiosInstance } from 'axios';

import { fakeApi } from '../instance';

class UserService {
	api: AxiosInstance;
	constructor() {
		this.api = fakeApi;
	}

	async getUserProfile() {
		return await this.api.get('/users');
	}
}

export const userService = new UserService();
