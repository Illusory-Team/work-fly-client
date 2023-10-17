import { FC } from 'react';

import { useUserStore } from '@/entities/User';

import { withAuthCheck } from '@/features/Auth/lib';

import { PageLayout } from '@/widgets/PageLayout';

const HomePage: FC = () => {
	const user = useUserStore(state => state.user);

	return (
		<PageLayout>
			<h1>Hello, {user?.firstName}</h1>
		</PageLayout>
	);
};

export default withAuthCheck(HomePage);
