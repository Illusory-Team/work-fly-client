import { FC } from 'react';

import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';

import styles from './NotificationDrawer.module.scss';

type NotificationDrawerProps = {
	closeHandler: () => void;
};

export const NotificationDrawer: FC<PropsWithChildren<NotificationDrawerProps>> = ({ children, closeHandler }) => {
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
