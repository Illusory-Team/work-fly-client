import classNames from 'classnames';
import { FC } from 'react';

import { getRelativeTimeString } from '@/shared/helpers';
import { UserHead } from '@/shared/ui/UserHead';

import { INotification } from '../../types';

import styles from './NotificationCard.module.scss';

interface NotificationCardProps extends INotification {
	className?: string;
}

export const NotificationCard: FC<NotificationCardProps> = ({
	title,
	subTitle,
	src,
	priority,
	date,
	folder_name,
	className = '',
}) => {
	const cl = classNames(styles.card, className);

	return (
		<div className={cl}>
			<UserHead size="m" src={src} title={title}>
				{subTitle}
			</UserHead>
			<div className={styles.footer}>
				{priority && <h5 className={styles.priority}>{priority}</h5>}
				<p className={styles.date}>{getRelativeTimeString(date)}</p>
				<p>{folder_name}</p>
			</div>
		</div>
	);
};
