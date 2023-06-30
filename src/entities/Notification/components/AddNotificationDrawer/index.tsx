import { FC, useState } from 'react';

import { Drawer } from '@/shared/ui';

export const AddNotificationDrawer: FC = () => {
	const [isShow, setIsShow] = useState(false);

	const closeHandler = () => setIsShow(false);

	return (
		<Drawer open={isShow} onClose={closeHandler}>
			<div className=""></div>
		</Drawer>
	);
};
