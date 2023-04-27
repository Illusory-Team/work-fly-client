import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IUser } from '@/shared/types';

import { UserResponse } from '../types/UserResponse';

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
			const fullNameSplit = action.payload.user.fullName.split(' ');
			const firstName = fullNameSplit[0];
			const lastName = fullNameSplit[1];

			state.user = {
				...action.payload.user,
				firstName,
				lastName,
				isOwner: false,
				csrfToken: action.payload.csrfToken,
			};
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

export const { setCurrentUser } = userSlice.actions;
