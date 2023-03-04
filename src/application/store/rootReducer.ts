import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';

import { drawerControllerReducer } from '@/shared/store/drawerController';

export const rootReducer = combineReducers({
	user: userReducer,
	drawerRootController: drawerControllerReducer,
});

