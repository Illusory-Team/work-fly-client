import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Drawer.module.scss';
import { DrawerProps } from './Drawer.types';

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
	isShow,
	closeHandler,
	anchor = 'left',
	size = 'l',
	className = '',
	children,
}) => {
	const cl = classNames(styles.drawer, styles[anchor], styles[size], isShow && styles.show, className);
	const clOverlay = classNames(styles.overlay, isShow && styles.show);

	return (
		<>
			<div onClick={closeHandler} className={clOverlay}></div>
			<div className={cl}>{children}</div>
		</>
	);
};
