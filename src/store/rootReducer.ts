import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './auth/auth.slice';

export const rootReducer = combineReducers({
	user: userSlice,
});
