import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.scss';
import Image from 'next/image';

enum avatarSize {
	'l' = 68,
	'm' = 56,
	's' = 48,
	'xs' = 36,
}

export const Avatar: FC<PropsWithChildren<AvatarProps>> = ({
	className,
	size = 'm',
	variant = 'circle',
	alt = '',
	src = '',
	children,
	...props
}) => {
	const cl = classNames(styles.container, styles[size], styles[variant], !src && styles.default, className);

	return (
		<div className={cl} {...props}>
			{src ? <Image src={src} alt={alt} width={avatarSize[size]} height={avatarSize[size]} /> : children}
		</div>
	);
};
