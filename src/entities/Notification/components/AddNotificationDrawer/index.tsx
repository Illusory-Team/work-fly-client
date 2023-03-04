import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/hooks';
import { closeDrawer } from '@/shared/store/drawerController';
import { Drawer } from '@/shared/ui/Drawer';

export const AddNotificationDrawer: FC = () => {
	const isShow = useAppSelector(state => state.drawerRootController.isOpenDrawer);
	const dispatch = useDispatch();
	const closeHandler = () => dispatch(closeDrawer());

	return (
		<Drawer isShow={isShow} closeHandler={closeHandler}>
			<div className=""></div>
		</Drawer>
	);
};
