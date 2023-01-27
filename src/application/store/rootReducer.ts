import { combineReducers } from '@reduxjs/toolkit';

import '@/entities/User';
import { userReducer } from '@/entities/User';

export const rootReducer = combineReducers({
	user: userReducer,
});
