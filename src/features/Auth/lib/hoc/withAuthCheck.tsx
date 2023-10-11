import { Box, CircularProgress } from '@mui/material';
import { FC, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useUserStore } from '@/entities/User/model/userStore';

import { authService } from '@/shared/api';
import { LOGIN_PATH, REGISTER_PATH } from '@/shared/config/paths';

export const withAuthCheck = <P extends object>(WrappedComponent: FC<P>) => {
	const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	const ComponentWithAuth = (props: P) => {
		const navigate = useNavigate();
		const { pathname } = useLocation();

		const { isAuthenticated, isLoading, getUser, setLoading } = useUserStore();

		const loadUser = useCallback(async () => {
			setLoading(true);
			const token = await authService.refreshToken();

			if (!token) {
				navigate('/login');
				setLoading(false);
				return;
			}

			await getUser();
		}, []);

		useEffect(() => {
			if (!isAuthenticated) {
				loadUser();
			}

			if (isAuthenticated && (pathname === LOGIN_PATH || pathname === REGISTER_PATH)) {
				navigate('/');
			}
		}, [isAuthenticated, loadUser]);

		if (isLoading && !isAuthenticated) {
			return (
				<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
					<CircularProgress />
				</Box>
			);
		}

		return <WrappedComponent {...(props as P)} />;
	};

	ComponentWithAuth.displayName = `withAuthCheck(${displayName})`;

	return ComponentWithAuth;
};
