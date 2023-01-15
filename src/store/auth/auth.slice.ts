import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'shared/types/auth/IUser.types';

interface InitialType {
	user: IUser | null;
}

const initialState: InitialType = {
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});

export default authSlice.reducer;
