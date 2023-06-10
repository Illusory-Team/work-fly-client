import classNames from 'classnames';
import { FC } from 'react';

import { getRelativeTimeString } from '@/shared/helpers';
import { INotification } from '@/shared/types';
import { EntityHead } from '@/shared/ui';

import styles from './NotificationCard.module.scss';

interface NotificationCardProps {
	data: INotification;
	className?: string;
}

export const NotificationCard: FC<NotificationCardProps> = ({ data, className = '' }) => {
	const cl = classNames(styles.card, className);
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
