import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/lib/hooks';
import { closeDrawer } from '@/shared/store/drawerController';
import { Drawer } from '@/shared/ui';

export const AddNotificationDrawer: FC = () => {
	// FIX ME - а точно ли будем стейт менеджер для этого юзать?
	const isShow = useAppSelector(state => state.drawerRootController.isOpenDrawer);
	const dispatch = useDispatch();
	const closeHandler = () => dispatch(closeDrawer());

	return (
		<Drawer open={isShow} onClose={closeHandler}>
			<div className=""></div>
		</Drawer>
	);
};
