import { Drawer } from '@/components/ui/Drawer';
import { FC } from 'react';
import { UserDrawerProps } from './UserDrawer.types';
import styles from './UserDrawer.module.scss';
import { Icon } from '@/components/ui/Icon';
import { UserHead } from '@/components/ui/UserHead';
import { UserData } from './UserDrawer.mock';
import { Tabs } from './components/Tabs';

export const UserDrawer: FC<UserDrawerProps> = ({ isShow, toggleShow }) => {
	return (
		<Drawer anchor="right" isShow={isShow} closeHandler={toggleShow}>
			<div className={styles.body}>
				<div className={styles.firstSection}>
					<h2>Work</h2>
					<Icon className={styles.close} name="other_back" onClick={toggleShow} />
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
