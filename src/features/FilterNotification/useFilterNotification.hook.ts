'use client';

import { SyntheticEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { NotificationService } from '@/entities/Notification';

type FilterType = 'all' | 'unread';

export const useFilterNotification = () => {
	const [filterType, setFilterType] = useState<FilterType>('all');

	const { data } = useQuery('notifications', NotificationService.getNotification);
	const unreadNotifications = data?.filter(notification => !notification.isRead);

	const changeHandler = (_: SyntheticEvent, newValue: FilterType) => {
		setFilterType(newValue);
	};

	const notifications = filterType === 'unread' ? unreadNotifications : data;

	return {
		filterType,
		changeHandler,
		notifications,
		allNotification: data,
		unreadNotifications,
	};
};
