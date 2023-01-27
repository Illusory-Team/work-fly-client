import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../types';

interface InitialType {
	user: Nullable<IUser>;
}

const initialState: InitialType = {
	user: null,
};

const UserSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});

export const userReducer = UserSlice.reducer;
