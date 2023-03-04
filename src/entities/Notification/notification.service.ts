import { fakeApi } from '@/shared/api';
import { INotification } from '@/shared/types';

export const NotificationService = {
	async getNotification() {
		return (await fakeApi.get<INotification[]>('notifications')).data;
	},
};
