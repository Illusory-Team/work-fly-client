import { api } from '@/shared/api';

export const UserService = {
	async getUserProfile() {
		return await api.get('/users');
	},
};
