'use client';

import { FC, ReactNode, SyntheticEvent, useState } from 'react';

import { IUser } from '@/shared/api';
import { DialogContent, EntityHead, Icon, Tab, TabPanel, Tabs } from '@/shared/ui';

import { IUserTabs } from '../../types';

import styles from './ProfileTemplate.module.scss';

interface UserDrawerProps {
	data: IUser;
	isLoading?: boolean;
	error?: string;
	status: ReactNode;
	userHead?: ReactNode;
	tabs: IUserTabs[];
	closeHandler: () => void;
	isChangeable: boolean;
}

export const ProfileTemplate: FC<UserDrawerProps> = ({
	data,
	isLoading,
	status,
	tabs,
	error = '',
	closeHandler,
	isChangeable = false,
}) => {
	const [selectTab, setSelectTab] = useState(1);

	const handleChange = (_: SyntheticEvent, newValue: number) => {
		setSelectTab(newValue);
	};

	if (error) return <div>error</div>;

	return (
		<DialogContent
			Head={
				<>
					<div className={styles.first}>
						<div>{status}</div>
						<div className={styles.wrapper}>
							<Icon onClick={closeHandler} className={styles.close} name="other_back" />
						</div>
					</div>
					<div className={styles.second}>
						{/* FIX ME - вопрос с fullname так же будет зависеть от стора */}
						<EntityHead
							isChangeable={isChangeable}
							src={data.avatar || undefined}
							title={`${data?.firstName} ${data?.lastName}`}
							subTitle={data?.position?.value}
							alt={data ? `${data.firstName} ${data.lastName}` : ''}
						/>
						<h4>ID: {data.id}</h4>
					</div>
					<div className={styles.third}>
						<Tabs value={selectTab} onChange={handleChange}>
							<Tab value={1} label="personal detail" />
							<Tab value={2} label="password" />
						</Tabs>
					</div>
				</>
			}
		>
			<div className={styles.body}>
				{isLoading ? (
					<div>loading</div>
				) : (
					tabs.map((tab, i) => (
						<TabPanel key={i} value={selectTab} index={i + 1}>
							{tab.content}
						</TabPanel>
					))
				)}
			</div>
		</DialogContent>
	);
};
