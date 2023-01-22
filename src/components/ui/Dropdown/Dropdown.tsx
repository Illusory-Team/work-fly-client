import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { DropdownProps } from './Dropdown.types';
import styles from './Dropdown.module.scss';
import { useOutside } from '@/hooks/util/useOutside';

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
	show,
	closeHandler,
	mainComponent,
	children,
	className = '',
	...props
}) => {
	const cl = classNames(styles.dropdown, show && styles.show, className);

	const { ref } = useOutside<HTMLDivElement>(() => {
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
