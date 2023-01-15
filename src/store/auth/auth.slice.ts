import { createSlice } from '@reduxjs/toolkit';
import { User } from 'shared/models/user.model';

interface InitialType {
	user: Nullable<User>;
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
