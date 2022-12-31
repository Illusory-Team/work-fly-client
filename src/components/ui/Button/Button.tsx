import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { BtnProps } from './Button.types';

enum SizeEnum {
	'l' = 'btn-l',
	'm' = 'btn-m',
	's' = 'btn-s',
	'xs' = 'btn-xs',
}

const Btn: FC<PropsWithChildren<BtnProps>> = ({
	size = 'l',
	color = 'primary',
	variant = 'default',
	className = '',
	children,
	...props
}) => {
	return (
		<button {...props} className={['relative', styles[variant], styles[color], SizeEnum[size], className].join(' ')}>
			{children}
		</button>
	);
};

export default Btn;
