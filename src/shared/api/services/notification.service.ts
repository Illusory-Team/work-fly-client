import { AxiosInstance } from 'axios';

import { fakeApi } from '../instance';
import { INotification } from '../types';

class NotificationService {
	api: AxiosInstance;
	constructor() {
		this.api = fakeApi;
	}

	async getNotification() {
		const { data } = await this.api.get<INotification[]>('/api/notifications');

		return data;
	}
}

export const notificationService = new NotificationService();
