import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';

import { IUser } from '@/shared/types';
import { DialogContent } from '@/shared/ui/DialogContent';
import { EntityHead } from '@/shared/ui/EntityHead';
import { Icon } from '@/shared/ui/Icon';

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
	const [selectTab, setSelectTab] = useState(0);

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
						<EntityHead
							isChangeable={isChangeable}
							src={data?.avatar}
							title={`${data?.firstName} ${data?.lastName}`}
							subTitle={data?.position?.value}
							defaultAvatar={`${data?.firstName} ${data?.lastName}`}
						/>
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
				</>
			}
		>
			<div className={styles.body}>{isLoading ? <div>loading</div> : tabs[selectTab].content}</div>
		</DialogContent>
	);
};
