import Image from 'next/image';
import { FC } from 'react';

import { NotificationCard } from '@/entities/Notification';

import { INotification } from '@/shared/types';

import styles from './NotificationList.module.scss';

interface NotificationListProps {
	notifications: INotification[] | undefined;
}

export const NotificationList: FC<NotificationListProps> = ({ notifications }) => {
	return (
		<div className={styles.notificationList}>
			{notifications?.length ? (
				notifications.map(notification => (
					<NotificationCard className={styles.notificationCard} key={notification.id} {...notification} />
				))
			) : (
				<div className={styles.empty}>
					<Image src="/guy_and_a_cat.png" alt="" width={200} height={248} />
					<h2>
						There aren’t any <br />
						notifications
					</h2>
				</div>
			)}
		</div>
	);
};
