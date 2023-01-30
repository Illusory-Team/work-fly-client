import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUser } from '../types';

interface InitialState {
	user: IUser;
	status: string;
	readonly: boolean;
	id: string | number;
}

const initialState: InitialState = {
	user: {
		id: null,
		activity: null,
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
	id: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAlienUser(state, action: PayloadAction<string | number>) {
			state.id = action.payload;
			state.readonly = true;
		},
		setReadonly(state, action: PayloadAction<boolean>) {
			state.readonly = action.payload;
		},
	},
});

export const userReducer = userSlice.reducer;

export const { setAlienUser, setReadonly } = userSlice.actions;
