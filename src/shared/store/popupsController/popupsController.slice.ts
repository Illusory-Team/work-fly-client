import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
	userProfile: boolean;
	viewNotificationDrawer: boolean;
	addNotificationDrawer: boolean;
}

const initialState: InitialState = {
	userProfile: false,
	viewNotificationDrawer: false,
	addNotificationDrawer: false,
};

const popupsControllerSlice = createSlice({
	name: 'popupsController',
	initialState,
	reducers: {
		closePopup(state, { payload }: PayloadAction<keyof InitialState>) {
			state[payload] = false;
		},
		openPopup(state, { payload }: PayloadAction<keyof InitialState>) {
			state[payload] = true;
		},
	},
});

export const popupsControllerReducer = popupsControllerSlice.reducer;
export const { closePopup, openPopup } = popupsControllerSlice.actions;
