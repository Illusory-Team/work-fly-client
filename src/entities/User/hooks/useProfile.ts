import { useState } from 'react';

export const useProfile = () => {
	const [profileDrawer, setProfileDrawer] = useState(false);

	const openOwnProfileHandler = () => {
		setProfileDrawer(true);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const openProfileHandler = (id: string | number) => {
		setProfileDrawer(true);
	};

	return {
		openOwnProfileHandler,
		openProfileHandler,
	};
};
