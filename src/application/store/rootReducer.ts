import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';

import { popupsControllerReducer } from '@/shared/store/popupsController';

export const rootReducer = combineReducers({
	user: userReducer,
	popupsController: popupsControllerReducer,
});
