import { useRouter } from 'next/navigation';
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
