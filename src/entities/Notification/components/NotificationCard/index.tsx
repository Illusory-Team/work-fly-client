import { FC } from 'react';

import { Notification } from '@/shared/api';
import { getRelativeTimeString } from '@/shared/lib/helpers';
import { classname } from '@/shared/package/classname';
import { EntityHead } from '@/shared/ui';

import styles from './NotificationCard.module.scss';

interface NotificationCardProps {
	data: Notification;
	className?: string;
}

export const NotificationCard: FC<NotificationCardProps> = ({ data, className = '' }) => {
	const cl = classname(styles.card, className);
	const { date, folder_name, priority, src, subTitle, title } = data;

	return (
		<div className={cl}>
			<EntityHead classNameText={styles.head} src={src} title={title} subTitle={subTitle} />
			<div className={styles.footer}>
				{priority && <h5 className={styles.priority}>{priority}</h5>}
				<p className={styles.date}>{getRelativeTimeString(date)}</p>
				<p>{folder_name}</p>
			</div>
		</div>
	);
};
