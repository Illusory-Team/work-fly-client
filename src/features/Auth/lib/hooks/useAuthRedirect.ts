'use client';

import { useEvent, useStore } from 'effector-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { $profile, getUser } from '@/entities/User';
import { getToken } from '@/entities/User/model/user.effect';

import { LOGIN_PATH } from '@/shared/config/paths';

export const useAuthRedirect = () => {
	const router = useRouter();

	const { isAuthenticated } = useStore($profile);
	const isLoading = useStore(getUser.pending);

	const getUserEvent = useEvent(getUser);

	const checkAuth = async () => {
		const token = await getToken();

		if (!token) {
			router.push(LOGIN_PATH);
			return;
		}
		await getUserEvent();
	};

	useEffect(() => {
		checkAuth();

		if (isAuthenticated && !isLoading) {
			router.push('/');
		}
	}, [isAuthenticated]);
};
