import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUser, UserResponse } from '@/shared/api';

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
				firstName: '',
				lastName: '',
			};
		},
		clearUserState(state) {
			state.user = null;
		},
	},
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser, clearUserState } = userSlice.actions;
