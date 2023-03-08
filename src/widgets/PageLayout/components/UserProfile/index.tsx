import { useRouter } from 'next/router';
import { FC } from 'react';

import { IUserTabs, ProfileTemplate, userSelector } from '@/entities/User';

import { ChangePassword, ChangePersonalDetail } from '@/features/UserActions';

import { useAppSelector } from '@/shared/hooks';
import { Drawer } from '@/shared/ui/Drawer';

export const UserProfile: FC = () => {
	const { user, status } = useAppSelector(userSelector);

	const router = useRouter();
	const closeHandler = () => router.back();

	const tabs: IUserTabs[] = [
		{ title: 'Personal Detail', content: <ChangePersonalDetail /> },
		{ title: 'Password', content: <ChangePassword /> },
	];

	return (
		<Drawer direction="right" isShow={true} closeHandler={closeHandler}>
			<ProfileTemplate
				closeHandler={closeHandler}
				data={user}
				status={<p>{status}</p>}
				tabs={tabs}
				isChangeable={true}
			/>
		</Drawer>
	);
};
