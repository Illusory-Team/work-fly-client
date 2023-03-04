import { FC } from 'react';

import { userSelector } from '@/entities/User';

import { useAppSelector } from '@/shared/hooks';

import { PageLayout } from '@/widgets/PageLayout';

export const HomeView: FC = () => {
	const { user } = useAppSelector(userSelector);
	return (
		<PageLayout>
			<h1>Hello, ${user.firstName}!</h1>
		</PageLayout>
	);
};
