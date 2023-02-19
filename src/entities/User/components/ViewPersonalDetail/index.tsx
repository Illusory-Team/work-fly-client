import { FC } from 'react';

import { IUser } from '@/shared/types';

import { DescribedText } from '../DescribedText';

import styles from './ViewPersonalDetail.module.scss';

interface ViewPersonalDetailProps {
	user: IUser;
	isLoading: boolean;
}

export const ViewPersonalDetail: FC<ViewPersonalDetailProps> = ({ user, isLoading }) => {
	const userInfo = [
		{ description: 'Phone Number', text: user.phone ?? '---' },
		{ description: 'Email', text: user.email },
		{ description: 'Department', text: '---' },
		{ description: 'Activity', text: user.phone ?? '---' },
		{ description: 'Birthday', text: user.phone ?? '---' },
		{ description: 'Address', text: user.phone ?? '---' },
	];

	if (isLoading) return <div>Loading</div>;

	return (
		<div className={styles.container}>
			<h2>PROFILE DETAIL</h2>
			<div className={styles.wrapper}>
				{userInfo.map(info => (
					<DescribedText className={styles.info} key={info.description} description={info.description}>
						{info.text}
					</DescribedText>
				))}
			</div>
			<p>{user.description ?? '---'}</p>
		</div>
	);
};
