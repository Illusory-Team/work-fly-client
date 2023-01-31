import { useDispatch } from 'react-redux';

import { openPopup } from '@/shared/store/popupsController';

import { setAlienUser, setReadonly } from '../model';

export const useProfile = () => {
	const dispatch = useDispatch();

	const openOwnProfileHandler = () => {
		dispatch(openPopup('userProfile'));
		dispatch(setReadonly(false));
	};

	const openProfileHandler = (id: string | number) => {
		dispatch(openPopup('userProfile'));
		dispatch(setAlienUser(id));
	};

	return {
		openOwnProfileHandler,
		openProfileHandler,
	};
};
