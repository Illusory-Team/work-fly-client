'use client';

import { useState } from 'react';
import { useQuery } from 'react-query';

import { NotificationService } from '@/entities/Notification';

type FilterType = 'all' | 'unread';

export const useFilterNotification = () => {
	const [filterType, setFilterType] = useState<FilterType>('all');

	const { data } = useQuery('notifications', NotificationService.getNotification);
	const unreadNotifications = data?.filter(notification => !notification.isRead);

	const notifications = filterType === 'unread' ? unreadNotifications : data;

	return {
		filterType,
		setFilterType,
		notifications,
		allNotification: data,
		unreadNotifications,
	};
};
