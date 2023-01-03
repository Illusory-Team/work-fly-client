import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { BtnProps } from './Button.types';

enum SizeEnum {
	'l' = 'btn-l',
	'm' = 'btn-m',
	's' = 'btn-s',
	'xs' = 'btn-xs',
}

export const Button: FC<PropsWithChildren<BtnProps>> = ({
	size = 'l',
	color = 'primary',
	variant = 'default',
	className = '',
	children,
	...props
}) => {
	const cl = classNames('relative', SizeEnum[size], styles[variant], styles[color], className);

	return (
		<button {...props} className={cl}>
			{children}
		</button>
	);
};
