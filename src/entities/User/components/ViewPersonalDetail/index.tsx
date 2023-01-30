import { FC } from 'react';

import { IUser } from '@/entities/User';

import styles from './ViewPersonalDetail.module.scss';

interface ViewPersonalDetailProps {
	user: IUser;
	isLoading: boolean;
}

export const ViewPersonalDetail: FC<ViewPersonalDetailProps> = ({ user, isLoading }) => {
	if (isLoading) return <div>Loading</div>;

	return (
		<div className={styles.container}>
			<h2>PROFILE DETAIL</h2>
			<div className={styles.wrapper}>
				<div className={styles.titledText}>
					<h5>Phone number</h5>
					<p>{user.phone}</p>
				</div>
				<div className={styles.titledText}>
					<h5>Email</h5>
					<p>{user.email}</p>
				</div>
				<div className={styles.titledText}>
					<h5>Department</h5>
					<p>{'none'}</p>
				</div>
				<div className={styles.titledText}>
					<h5>{user.activity}</h5>
					<p>{user.fullName}</p>
				</div>
				<div className={styles.titledText}>
					<h5>Birthday</h5>
					<p>{user.birthday ?? '---'}</p>
				</div>
				<div className={styles.titledText}>
					<h5>address</h5>
					<p>{user.address ?? '---'}</p>
				</div>
			</div>
			<p className={styles.description}>{user.description ?? '---'}</p>
		</div>
	);
};
