import classNames from 'classnames';
import { FC, PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Portal } from '../Portal';

import styles from './Drawer.module.scss';
import { DrawerProps } from './Drawer.types';

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
	isShow,
	closeHandler,
	direction = 'bottom',
	size = 'l',
	className = '',
	children,
	transitionDuration = 200,
}) => {
	const nodeRef = useRef(null);
	const cl = classNames(styles.drawer, styles[direction], styles[size], className);

	const closeOnEscape = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler],
	);

	useEffect(() => {
		document.addEventListener('keydown', closeOnEscape);

		return () => {
			document.addEventListener('keydown', closeOnEscape);
		};
	}, [closeOnEscape]);

	if (!isShow) return null;

	return (
		<Portal>
			<CSSTransition
				classNames={cl}
				timeout={{ enter: 0, exit: transitionDuration }}
				nodeRef={nodeRef}
				in={isShow}
				unmountOnExit
			>
				<>
					<div onClick={closeHandler} className={styles.overlay} />
					<div className={cl} ref={nodeRef}>
						{children}
					</div>
				</>
			</CSSTransition>
		</Portal>
	);
};
