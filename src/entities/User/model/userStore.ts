import { AxiosError } from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { User, userService } from '@/shared/api';
import { userMapper } from '@/shared/api/mappers';
import { logger } from '@/shared/lib/helpers/logger';

type UserState = {
	user: Nullable<User>;
	isLoading: boolean;
	isAuthenticated: boolean;
	error: null | string;
	getUser: () => void;
	clearUser: () => void;
	setUser: (user: User) => void;
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
						state.user = userMapper(response.data);
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
		setLoading: value => {
			setState(state => {
				state.isLoading = value;
			});
		},
	})),
);
