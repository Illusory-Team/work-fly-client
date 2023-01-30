import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/hooks';
import { closePopup } from '@/shared/store/popupsController';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { UserHead } from '@/shared/ui/UserHead';

import { userPopupSelector } from '../../model';
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
	const isOpen = useAppSelector(userPopupSelector);
	const dispatch = useDispatch();

	if (error) return <div>error</div>;

	return (
		<Drawer anchor="right" isShow={isOpen} closeHandler={() => dispatch(closePopup('userProfile'))}>
			<div className={styles.header}>
				<div className={styles.first}>
					<div>{status}</div>
					<div className={styles.wrapper}>
						<Icon name="action_archive" />
						<Icon onClick={() => dispatch(closePopup('userProfile'))} className={styles.close} name="other_back" />
					</div>
				</div>
				<div className={styles.second}>
					<UserHead src={data.avatar} title={data.fullName}>
						{data.activity}
					</UserHead>
					<h4>ID: {data.id}</h4>
				</div>
				<div className={styles.third}>
					{tabs.map((tag, index) => (
						<h4
							onClick={() => setSelectTab(index)}
							className={cn(styles.tag, {
								[styles.active]: selectTab === index,
							})}
							key={tag.title}
						>
							{tag.title}
						</h4>
					))}
				</div>
			</div>
			<div className={styles.body}>{isLoading ? <div>loading</div> : tabs[selectTab].content}</div>
		</Drawer>
	);
};
