import { createStore } from 'effector';

import { UserStore } from '@/shared/api';

import { getUser } from './user.effect';
import { setProfileDrawerEvent } from './user.event';

export const $profile = createStore<UserStore>({
	isLoading: false,
	user: null,
	isAuthenticated: false,
	error: null,
});

$profile.on(getUser.pending, state => {
	state.isLoading = true;
});

$profile.on(getUser.doneData, (state, user) => {
	state.isLoading = false;

	if (user) {
		state.user = user;
		state.isAuthenticated = true;
	}
});

$profile.on(getUser.fail, (state, { error }) => {
	state.isLoading = false;
	state.user = null;
	state.error = error.message;
});

export const $otherUserId = createStore<string>('');

export const $profileReadonly = createStore(false);

export const $drawerProfile = createStore(false).on(setProfileDrawerEvent, (_, payload) => payload);
