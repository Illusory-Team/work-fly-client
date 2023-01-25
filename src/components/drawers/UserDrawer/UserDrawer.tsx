import { Drawer } from '@/components/ui/Drawer';
import { FC } from 'react';
import { UserDrawerProps } from './UserDrawer.types';
import styles from './UserDrawer.module.scss';
import { Icon } from '@/components/ui/Icon';
import { TitledAvatar } from '@/components/ui/TitledAvatar';
import { UserData } from './UserDrawer.mock';
import { Tags } from './components/Tags';

export const UserDrawer: FC<UserDrawerProps> = ({ show, toggleShow }) => {
	return (
		<Drawer anchor="right" show={show} toggleHandler={toggleShow}>
			<div className={styles.body}>
				<div className={styles.firstSection}>
					<h2>Work</h2>
					<Icon className={styles.close} name="other_back" onClick={toggleShow} />
				</div>
				<div className={styles.secondSection}>
					<TitledAvatar src={UserData.avatar} title={`${UserData.fullName.first_name} ${UserData.fullName.last_name}`}>
						{UserData.activity}
					</TitledAvatar>
					<h4>ID: {UserData.id}</h4>
				</div>
				<Tags />
			</div>
		</Drawer>
	);
};
