import { createApi } from 'effector';

import { User } from '@/shared/api';

import { $otherUserId, $profile, $profileReadonly } from './user.store';

export const $profileApi = createApi($profile, {
	setProfile(store, payload: User) {
		store.user = payload;
		store.isAuthenticated = true;
	},
	removeProfile(store) {
		store.user = null;
		store.isAuthenticated = false;
	},
	stopLoad(store) {
		store.isLoading = false;
	},
});

export const $profileReadonlyApi = createApi($profileReadonly, {
	readonly(_, payload: boolean) {
		return payload;
	},
});

export const $otherUserIdApi = createApi($otherUserId, {
	setId(_, payload: string) {
		return payload;
	},
});
