import { useDispatch } from 'react-redux';

import { openDrawer } from '@/shared/store/drawerController';

import { setAlienUser, setReadonly } from '../model';

export const useProfile = () => {
	const dispatch = useDispatch();

	const openOwnProfileHandler = () => {
		dispatch(openDrawer());
		dispatch(setReadonly(false));
	};

	const openProfileHandler = (id: string | number) => {
		dispatch(openDrawer());
		dispatch(setAlienUser(id));
	};

	return {
		openOwnProfileHandler,
		openProfileHandler,
	};
};
