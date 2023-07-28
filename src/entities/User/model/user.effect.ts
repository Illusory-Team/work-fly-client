import { createEffect } from 'effector';

import { authService, userService } from '@/shared/api';

export const getUser = createEffect(async () => {
	return await userService.getUserProfile();
});

export const getToken = createEffect(async () => {
	return await authService.refreshToken();
});
