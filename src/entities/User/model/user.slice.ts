import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUser } from '../types';

interface InitialState {
	user: IUser;
	status: string;
	readonly: boolean;
	otherUserId: string | number;
}

const initialState: InitialState = {
	user: {
		id: null,
		position: undefined,
		address: null,
		avatar: '/anonym.png',
		birthday: null,
		description: '',
		email: '',
		fullName: 'anonym',
		phone: null,
	},
	status: 'Work',
	readonly: false,
	otherUserId: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
		setAlienUser(state, action: PayloadAction<string | number>) {
			state.otherUserId = action.payload;
			state.readonly = true;
		},
		setReadonly(state, action: PayloadAction<boolean>) {
			state.readonly = action.payload;
		},
	},
});

export const userReducer = userSlice.reducer;

export const { setAlienUser, setReadonly, setCurrentUser } = userSlice.actions;
