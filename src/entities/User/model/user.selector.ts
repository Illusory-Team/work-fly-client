import { AppState } from '@/app/store/store';

export const userPopupSelector = (state: AppState) => state.popupsController.userProfile;

export const userSelector = (state: AppState) => state.user;
