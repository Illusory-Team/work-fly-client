import { AxiosError } from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { User, authService, userService } from '@/shared/api';
import { logger } from '@/shared/lib/helpers/logger';

type UserState = {
	user: Nullable<User>;
	isLoading: boolean;
	isAuthenticated: boolean;
	error: null | string;
	getUser: () => void;
	clearUser: () => void;
	setUser: (user: User) => void;
	logout: () => void;
	setLoading: (value: boolean) => void;
};

export const useUserStore = create(
	immer<UserState>(setState => ({
		isLoading: false,
		isAuthenticated: false,
		user: null,
		error: null,
		getUser: async () => {
			setState(state => {
				state.isLoading = true;
			});

			try {
				const response = await userService.getUserProfile();

				if (!!response) {
					setState(state => {
						state.isAuthenticated = true;
						state.user = response;
						state.error = null;
					});
				}
			} catch (err: unknown) {
				const error = err as AxiosError;

				logger({ type: 'error', message: error.message });

				setState(state => {
					state.error = error.message;
				});
			} finally {
				setState(state => {
					state.isLoading = false;
				});
			}
		},
		clearUser: () => {
			setState(state => {
				state.user = null;
				state.isAuthenticated = false;
			});
		},
		setUser: (user: User) => {
			setState(state => {
				state.user = user;
				state.isAuthenticated = true;
			});
		},
		logout: async () => {
			try {
				await authService.logout();

				setState(state => {
					state.user = null;
					state.isAuthenticated = false;
				});
			} catch (err) {
				const error = err as AxiosError;
				logger({ type: 'error', message: error.message });
			}
		},
		setLoading: value => {
			setState(state => {
				state.isLoading = value;
			});
		},
	})),
);
