'use client';

import { useStore } from 'effector-react';
import { FC } from 'react';

import { $profile } from '@/entities/User';

import { withAuthCheck } from '@/features/Auth/lib';

import { PageLayout } from '@/widgets/PageLayout';

const HomeView: FC = () => {
	const { user } = useStore($profile);

	return (
		<PageLayout>
			<h1>Hello, {user?.firstName}</h1>
		</PageLayout>
	);
};

export default withAuthCheck(HomeView);
