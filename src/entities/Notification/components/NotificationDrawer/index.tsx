import { FC, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/hooks';
import { closePopup, viewNotificationDrawerSelector } from '@/shared/store';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';

import styles from './NotificationDrawer.module.scss';

export const NotificationDrawer: FC<PropsWithChildren> = ({ children }) => {
	const isShow = useAppSelector(viewNotificationDrawerSelector);
	const dispatch = useDispatch();
	const closeHandler = () => dispatch(closePopup('viewNotificationDrawer'));

	return (
		<Drawer anchor="right" size="m" isShow={isShow} closeHandler={closeHandler}>
			<div className={styles.header}>
				<Icon onClick={closeHandler} className={styles.close} name="other_back" />
			</div>
			<h2 className={styles.title}>Notification</h2>
			<div className={styles.body}>{children}</div>
		</Drawer>
	);
};
