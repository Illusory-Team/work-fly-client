import { FC } from 'react';

import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { UserHead } from '@/shared/ui/UserHead';

import { UserData } from '../../mock/UserDrawer';
import { Tabs } from '../Tabs';

import styles from './UserDrawer.module.scss';

interface UserDrawerProps {
	isShow: boolean;
	closeHandler: () => void;
	className?: string;
}

export const UserDrawer: FC<UserDrawerProps> = ({ isShow, closeHandler }) => {
	return (
		<Drawer anchor="right" isShow={isShow} closeHandler={closeHandler}>
			<div className={styles.body}>
				<div className={styles.firstSection}>
					<h2>Work</h2>
					<Icon className={styles.close} name="other_back" onClick={closeHandler} />
				</div>
				<div className={styles.secondSection}>
					<UserHead src={UserData.avatar} title={`${UserData.fullName.first_name} ${UserData.fullName.last_name}`}>
						{UserData.activity}
					</UserHead>
					<h4>ID: {UserData.id}</h4>
				</div>
				<Tabs />
			</div>
		</Drawer>
	);
};
