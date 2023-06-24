import { setProfileDrawerEvent } from '../model';

export const useProfile = () => {
	const openOwnProfileHandler = () => {
		setProfileDrawerEvent(true);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const openProfileHandler = (id: string | number) => {
		setProfileDrawerEvent(true);
	};

	return {
		openOwnProfileHandler,
		openProfileHandler,
	};
};
