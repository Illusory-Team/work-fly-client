import { createApi } from 'effector';

import { User } from '@/shared/api';

import { $otherUserId, $profile, $profileReadonly } from './user.store';

export const $profileApi = createApi($profile, {
	setProfile(_, payload: User) {
		return payload;
	},
	removeProfile() {
		return null;
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
