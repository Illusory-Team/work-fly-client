import { AxiosError } from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { useUserStore } from '@/entities/User';

import { authService } from '@/shared/api';
import { logger } from '@/shared/lib/helpers/logger';

type AuthStore = {
	isLoading: boolean;
	isAuthorized: boolean;
	logout: () => void;
};

export const useAuthStore = create(
	immer<AuthStore>(setState => ({
		isLoading: false,
		isAuthorized: false,
		logout: async () => {
			try {
				await authService.logout();

				useUserStore.getState().user = null;
				useUserStore.getState().isAuthenticated = false;
				setState(state => {
					state.isAuthorized = false;
				});
			} catch (err) {
				const error = err as AxiosError;
				logger({ type: 'error', message: error.message });
			}
		},
	})),
);
