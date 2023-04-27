import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { RootReducer, rootReducer } from './rootReducer';

export const makeStore = () => {
	return configureStore<RootReducer>({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV === 'development',
	});
};

export const wrapper = createWrapper<AppStore>(makeStore, { debug: Boolean(process.env.DEBUG) });
