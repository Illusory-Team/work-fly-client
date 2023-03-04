import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';

import { IUserTabs, UserDrawer, UserService, ViewPersonalDetail, userSelector } from '@/entities/User';

import { ChangeAvatar, ChangePassword, ChangePersonalDetail } from '@/features/UserActions';

import { useAppSelector } from '@/shared/hooks';
import { EntityHead } from '@/shared/ui/EntityHead';

export const UserProfile: FC = () => {
	const { user, readonly, status, otherUserId: id } = useAppSelector(userSelector);
	const { data, isLoading, refetch } = useQuery('user-view', () => UserService.getUser(id), {
		enabled: !!id,
	});
	const tabs: IUserTabs[] = [
		{ title: 'Personal Detail', content: <ChangePersonalDetail /> },
		{ title: 'Password', content: <ChangePassword /> },
	];
	const readonlyTabs: IUserTabs[] = [
		{ title: 'Personal Detail', content: <ViewPersonalDetail isLoading={isLoading} user={data ?? user} /> },
		{ title: 'Efficiency', content: <p>Efficiency</p> },
	];

	const fullName = `${user.firstName} ${user.lastName}`;

	useEffect(() => {
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<UserDrawer
			data={readonly && data ? data : user}
			status={<p>{status}</p>}
			isLoading={isLoading}
			tabs={readonly ? readonlyTabs : tabs}
			userHead={
				readonly ? (
					<EntityHead src={data?.avatar} defaultAvatar={fullName} title={fullName} subTitle={data?.position} />
				) : (
					<ChangeAvatar src={user.avatar} defaultAvatar={fullName} title={fullName} subTitle={user.position} />
				)
			}
		/>
	);
};
