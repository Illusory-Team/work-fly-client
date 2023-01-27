import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { useOutsideClick } from '@/shared/hooks';

import styles from './Dropdown.module.scss';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
	show,
	closeHandler,
	mainComponent,
	children,
	className = '',
	...props
}) => {
	const cl = classNames(styles.dropdown, show && styles.show, className);

	const { ref } = useOutsideClick<HTMLDivElement>(() => {
		closeHandler();
	});

	return (
		<div ref={ref} className={styles.container}>
			{mainComponent}
			<div className={cl} {...props}>
				{children}
			</div>
		</div>
	);
};
