import { FC } from 'react';
import SimpleBar from 'simplebar-react';

import { NotificationCard } from '@/entities/Notification';

import { Notification } from '@/shared/api';

import styles from './NotificationList.module.scss';

interface NotificationListProps {
	notifications?: Notification[];
}

export const NotificationList: FC<NotificationListProps> = ({ notifications }) => {
	return (
		<SimpleBar style={{ height: 'calc(100% - 90px)' }}>
			<div className={styles.notificationList}>
				{notifications?.length ? (
					notifications.map(notification => (
						<NotificationCard className={styles.notificationCard} key={notification.id} data={notification} />
					))
				) : (
					<div className={styles.empty}>
						<img src="/images/illustrations/guy_and_a_cat.png" alt="" width={200} height={248} />
						<h2>
							There aren’t any <br />
							notifications
						</h2>
					</div>
				)}
			</div>
		</SimpleBar>
	);
};
