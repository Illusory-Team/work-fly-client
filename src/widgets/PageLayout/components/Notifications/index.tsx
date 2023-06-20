import { FC } from 'react';

import { NotificationDrawer, NotificationList } from '@/entities/Notification';

import { useFilterNotification } from '@/features/FilterNotification';

import { Tab, Tabs } from '@/shared/ui';

import styles from './Notifications.module.scss';

type NotificationsProps = {
	closeHandler: () => void;
};

export const Notifications: FC<NotificationsProps> = ({ closeHandler }) => {
	const { filterType, notifications, changeHandler, unreadNotifications, allNotification } = useFilterNotification();

	return (
		<NotificationDrawer closeHandler={closeHandler}>
			<div className={styles.filter}>
				<Tabs value={filterType} onChange={changeHandler}>
					<Tab label={`All ${allNotification?.length || 0}`} value="all" />
					<Tab label={`Unread ${unreadNotifications?.length || 0}`} value="unread" />
				</Tabs>
			</div>
			<NotificationList notifications={notifications} />
		</NotificationDrawer>
	);
};
