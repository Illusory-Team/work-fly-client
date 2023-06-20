import { FC } from 'react';

import { Drawer, Icon } from '@/shared/ui';

import styles from './NotificationDrawer.module.scss';

type NotificationDrawerProps = {
	closeHandler: () => void;
};

export const NotificationDrawer: FC<PropsWithChildren<NotificationDrawerProps>> = ({ children, closeHandler }) => {
	return (
		<Drawer size="small" anchor="right" open={true} onClose={closeHandler}>
			<div className={styles.header}>
				<Icon onClick={closeHandler} className={styles.close} name="other_back" />
			</div>
			<h2 className={styles.title}>Notification</h2>

			<div className={styles.body}>{children}</div>
		</Drawer>
	);
};
