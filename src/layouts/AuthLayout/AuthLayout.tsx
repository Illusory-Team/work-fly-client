import { FC, PropsWithChildren } from 'react';

import { AuthHeader } from '@/widgets/AuthHeader';

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<AuthHeader />
			<main>{children}</main>
		</>
	);
};
