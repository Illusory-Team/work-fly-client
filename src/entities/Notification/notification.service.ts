import { fakeApi } from '@/shared/api';
import { INotification } from '@/shared/types';

export const NotificationService = {
	async getNotification() {
		return await (
			await fakeApi.get<INotification[]>('notifications')
		).data;
	},
};
