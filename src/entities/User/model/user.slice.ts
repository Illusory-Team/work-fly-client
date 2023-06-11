import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IUser } from '@/shared/types';

import { UserResponse } from '../types';

interface InitialState {
	user: Nullable<IUser>;
	status: string;
	readonly: boolean;
	otherUserId: string | number;
}

const initialState: InitialState = {
	user: null,
	status: 'Work',
	readonly: false,
	otherUserId: '',
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setCurrentUser(state, action: PayloadAction<UserResponse>) {
			state.user = {
				...action.payload.user,
				isOwner: false,
				csrfToken: action.payload.csrfToken,
			};
		},
		clearUserState(state) {
			state.user = null;
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.userReducer,
			};
		},
	},
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser, clearUserState } = userSlice.actions;
