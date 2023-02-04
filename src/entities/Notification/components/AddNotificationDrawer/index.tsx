import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/hooks';
import { closePopup } from '@/shared/store/popupsController';
import { Drawer } from '@/shared/ui/Drawer';

export const AddNotificationDrawer: FC = () => {
	const isShow = useAppSelector(state => state.popupsController.addNotificationDrawer);
	const dispatch = useDispatch();
	const closeHandler = () => dispatch(closePopup('addNotificationDrawer'));

	return (
		<Drawer isShow={isShow} closeHandler={closeHandler}>
			<div className=""></div>
		</Drawer>
	);
};
