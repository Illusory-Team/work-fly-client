import cn from 'classnames';
import { FC } from 'react';

import { NotificationDrawer, NotificationList } from '@/entities/Notification';

import { useFilterNotification } from '@/features/FilterNotification';

import styles from './Notifications.module.scss';

type NotificationsProps = {
	closeHandler: () => void;
};

export const Notifications: FC<NotificationsProps> = ({ closeHandler }) => {
	const { filterType, notifications, setFilterType, unreadNotifications, allNotification } = useFilterNotification();

	return (
		<NotificationDrawer closeHandler={closeHandler}>
			<div className={styles.filter}>
				<button
					onClick={() => setFilterType('all')}
					className={cn(styles.filterButton, filterType === 'all' && styles.active)}
				>
					All ({allNotification?.length ?? 0})
				</button>
				<button
					onClick={() => setFilterType('unread')}
					className={cn(styles.filterButton, filterType === 'unread' && styles.active)}
				>
					Unread ({unreadNotifications?.length ?? 0})
				</button>
			</div>
			<NotificationList notifications={notifications} />
		</NotificationDrawer>
	);
};
