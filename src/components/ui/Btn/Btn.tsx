import { FC, PropsWithChildren } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import styles from './Btn.module.scss';
import { BtnColorType, BtnSizeType, BtnVariantType } from './Btn.type';

interface BtnProps extends HTMLMotionProps<'button'> {
	className?: string;
	variant?: BtnVariantType;
	size?: BtnSizeType;
	color?: BtnColorType;
}

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
		<motion.button
			{...props}
			className={[styles.btn, styles[variant], styles[color], SizeEnum[size], className].join(' ')}
		>
			{children}
		</motion.button>
	);
};

export default Btn;
