import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/hooks';
import { closePopup, userProfileDrawerSelector } from '@/shared/store/popupsController';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { UserHead } from '@/shared/ui/UserHead';

import { IUser, IUserTabs } from '../../types';

import styles from './UserDrawer.module.scss';

interface UserDrawerProps {
	data: IUser;
	isLoading: boolean;
	error?: string;
	status: ReactNode;
	tabs: IUserTabs[];
}

export const UserDrawer: FC<UserDrawerProps> = ({ data, isLoading, status, tabs, error = '' }) => {
	const [selectTab, setSelectTab] = useState(0);
	const isOpen = useAppSelector(userProfileDrawerSelector);
	const dispatch = useDispatch();
	const closeHandler = () => dispatch(closePopup('userProfile'));

	if (error) return <div>error</div>;

	return (
		<Drawer anchor="right" isShow={isOpen} closeHandler={closeHandler}>
			<div className={styles.header}>
				<div className={styles.first}>
					<div>{status}</div>
					<div className={styles.wrapper}>
						<Icon name="action_archive" />
						<Icon onClick={closeHandler} className={styles.close} name="other_back" />
					</div>
				</div>
				<div className={styles.second}>
					<UserHead src={data.avatar} title={data.fullName} position={data.position} />
					<h4>ID: {data.id}</h4>
				</div>
				<div className={styles.third}>
					{tabs.map((tab, index) => (
						<h4
							onClick={() => setSelectTab(index)}
							className={cn(styles.tab, {
								[styles.active]: selectTab === index,
							})}
							key={tab.title}
						>
							{tab.title}
						</h4>
					))}
				</div>
			</div>
			<div className={styles.body}>{isLoading ? <div>loading</div> : tabs[selectTab].content}</div>
		</Drawer>
	);
};
