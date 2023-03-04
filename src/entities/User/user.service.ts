import { fakeApi } from '@/shared/api';
import { IUser } from '@/shared/types';

export const UserService = {
	async getUser(id: string | number): Promise<IUser> {
		return await (
			await fakeApi(`users?id=${id}`)
		).data[0];
	},
};
