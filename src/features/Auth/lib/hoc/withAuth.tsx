'use client';

import { Box, CircularProgress } from '@mui/material';
import { useEvent, useStore } from 'effector-react';
import { useRouter } from 'next/navigation';
import { FC, useCallback, useEffect } from 'react';

import { $profile, getUser } from '@/entities/User';

import { authService } from '@/shared/api';
import { LOGIN_PATH } from '@/shared/config/paths';

export const withAuth = <P extends object>(WrappedComponent: FC<P>) => {
	const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	const ComponentWithAuth = (props: P) => {
		const router = useRouter();

		const { isAuthenticated } = useStore($profile);
		const isLoading = useStore(getUser.pending);

		const getUserEvent = useEvent(getUser);

		const checkAuth = useCallback(() => {
			const loadUser = async () => {
				const token = await authService.refreshToken();

				if (!token) {
					router.push(LOGIN_PATH);
					return;
				}

				await getUserEvent();
			};

			if (!isAuthenticated) {
				loadUser();
			}
		}, [isAuthenticated]);

		useEffect(() => {
			checkAuth();
		}, [checkAuth]);

		if (isLoading || !isAuthenticated) {
			return (
				<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
					<CircularProgress />
				</Box>
			);
		}

		return <WrappedComponent {...(props as P)} />;
	};

	ComponentWithAuth.displayName = `withAuth(${displayName})`;

	return ComponentWithAuth;
};
