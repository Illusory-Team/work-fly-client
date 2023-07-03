import { AxiosInstance } from 'axios';

import { fakeApi } from '../instance';
import { Notification } from '../types';

class NotificationService {
	api: AxiosInstance;
	constructor() {
		this.api = fakeApi;
	}

	async getNotification() {
		const { data } = await this.api.get<Notification[]>('/api/notifications');

		return data;
	}
}

export const notificationService = new NotificationService();
