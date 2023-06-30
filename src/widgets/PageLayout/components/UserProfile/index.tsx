import { useStore } from 'effector-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { $profile, IUserTabs, ProfileTemplate } from '@/entities/User';

import { ChangePassword, ChangePersonalDetail } from '@/features/UserActions';

import { Drawer } from '@/shared/ui';

export const UserProfile: FC = () => {
	const user = useStore($profile);

	const router = useRouter();
	const closeHandler = () => router.back();

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
