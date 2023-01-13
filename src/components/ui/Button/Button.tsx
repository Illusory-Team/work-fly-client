import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { BtnProps } from './Button.types';

export const Button: FC<PropsWithChildren<BtnProps>> = ({
	size = 'l',
	color = 'primary',
	variant = 'default',
	className = '',
	children,
	...props
}) => {
	const cl = classNames('relative', styles[size], styles[variant], styles[color], className);

	return (
		<button {...props} className={cl}>
			{children}
		</button>
	);
};
