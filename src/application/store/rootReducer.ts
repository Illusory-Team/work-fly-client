import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { userReducer } from '@/entities/User';

import { drawerControllerReducer } from '@/shared/store/drawerController';

export const combinedReducers = combineReducers({
	userReducer,
	drawerRootController: drawerControllerReducer,
});

export type RootReducer = ReturnType<typeof combinedReducers>;

export const rootReducer = (state: RootReducer, action: AnyAction) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload,
		};

		return nextState;
	}

	return combinedReducers(state, action);
};
