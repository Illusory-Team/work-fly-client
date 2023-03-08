import { useDispatch } from 'react-redux';

import { openDrawer } from '@/shared/store/drawerController';

export const useProfile = () => {
	const dispatch = useDispatch();

	const openOwnProfileHandler = () => {
		dispatch(openDrawer());
	};

	const openProfileHandler = (id: string | number) => {
		dispatch(openDrawer());
	};

	return {
		openOwnProfileHandler,
		openProfileHandler,
	};
};
