import axios from 'axios';

import { INotification } from '@/shared/types';

export const NotificationService = {
	async getNotification() {
		return (await axios.get<INotification[]>('/api/notifications')).data;
	},
};
