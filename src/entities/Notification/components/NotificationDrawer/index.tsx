import { FC, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/hooks';
import { closeDrawer, drawerControllerSelector } from '@/shared/store';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';

import styles from './NotificationDrawer.module.scss';

export const NotificationDrawer: FC<PropsWithChildren> = ({ children }) => {
	const isShow = useAppSelector(drawerControllerSelector);
	const dispatch = useDispatch();
	const closeHandler = () => dispatch(closeDrawer());

	return (
		<Drawer direction="right" size="m" isShow={true} closeHandler={closeHandler}>
			<div className={styles.header}>
				<Icon onClick={closeHandler} className={styles.close} name="other_back" />
			</div>
			<h2 className={styles.title}>Notification</h2>
			<div className={styles.body}>{children}</div>
		</Drawer>
	);
};
