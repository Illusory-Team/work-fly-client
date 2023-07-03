'use client';

import { SyntheticEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { notificationService } from '@/shared/api';

type FilterType = 'all' | 'unread';

export const useFilterNotification = () => {
	const [filterType, setFilterType] = useState<FilterType>('all');

	const { data } = useQuery('notifications', notificationService.getNotification);
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
