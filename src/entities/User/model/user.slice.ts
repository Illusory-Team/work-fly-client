import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUser } from '@/shared/types';

interface InitialState {
	user: IUser;
	status: string;
	readonly: boolean;
	otherUserId: string | number;
}

const initialState: InitialState = {
	user: {
		id: '1',
		position: 'Manager',
		address: null,
		avatar: null,
		birthday: null,
		description: '',
		email: '',
		firstName: 'Nameless',
		lastName: 'Nameless',
		phone: null,
		isOwner: true,
	},
	status: 'Work',
	readonly: false,
	otherUserId: '',
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setCurrentUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
	},
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;
