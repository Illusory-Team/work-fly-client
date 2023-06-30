import { createStore } from 'effector';

import { User } from '@/shared/api';

import { setProfileDrawerEvent } from './user.event';

export const $profile = createStore<null | User>(null);

export const $otherUserId = createStore<string>('');

export const $profileReadonly = createStore(false);

export const $drawerProfile = createStore(false).on(setProfileDrawerEvent, (_, payload) => payload);
