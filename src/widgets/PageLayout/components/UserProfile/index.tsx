import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IUserTabs, ProfileTemplate, useUserStore } from '@/entities/User';

import { ChangePassword, ChangePersonalDetail } from '@/features/UserActions';

import { Drawer } from '@/shared/ui';

export const UserProfile: FC = () => {
	const user = useUserStore(state => state.user);

	const router = useNavigate();
	const closeHandler = () => router(-1);

	const tabs: IUserTabs[] = [
		{ title: 'Personal Detail', content: <ChangePersonalDetail /> },
		{ title: 'Password', content: <ChangePassword /> },
	];

	return (
		<Drawer anchor="right" open={true} onClose={closeHandler}>
			{/* TODO: сделать обработку в случае, если user === null*/}
			{!!user ? (
				<ProfileTemplate
					closeHandler={closeHandler}
					data={user}
					status={<p>{status}</p>}
					tabs={tabs}
					isChangeable={true}
				/>
			) : (
				<p>Something went wrong</p>
			)}
		</Drawer>
	);
};
