/* eslint-disable arrow-parens */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [1, 2, 4],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
