import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { DrawerProps } from './Drawer.types';
import styles from './Drawer.module.scss';

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
	show,
	toggleHandler,
	anchor = 'left',
	className = '',
	children,
}) => {
	const cl = classNames(styles.drawer, styles[anchor], show && styles.show, className);
	const clOverlay = classNames(styles.overlay, show && styles.show);

	return (
		<>
			<div onClick={toggleHandler} className={clOverlay}></div>
			<div className={cl}>{children}</div>
		</>
	);
};
