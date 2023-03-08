import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	isOpenDrawer: boolean;
}

const initialState: InitialState = {
	isOpenDrawer: false,
};

const drawerControllerSlice = createSlice({
	name: 'drawerController',
	initialState,
	reducers: {
		closeDrawer(state) {
			state.isOpenDrawer = false;
		},
		openDrawer(state) {
			state.isOpenDrawer = true;
		},
	},
});

export const drawerControllerReducer = drawerControllerSlice.reducer;
export const { closeDrawer, openDrawer } = drawerControllerSlice.actions;
