import classNames from 'classnames';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import { getFirstLetters } from '@/shared/helpers/getFirstLetters';

import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';

enum avatarSize {
	'l' = 68,
	'm' = 56,
	's' = 48,
	'xs' = 36,
	'xxs' = 24,
}

export const Avatar: FC<PropsWithChildren<AvatarProps>> = ({
	className,
	size = 'm',
	variant = 'circle',
	defaultAvatar = null,
	alt = '',
	src = '',
	children,
	...props
}) => {
	const cl = classNames(styles.container, styles[size], styles[variant], !src && styles.default, className);
	const color = defaultAvatar ? `var(--avatar-${(defaultAvatar.codePointAt(0) as number) % 10})` : undefined;

	return (
		<div style={{ background: color }} className={cl} {...props}>
			{src ? (
				<Image src={src} alt={alt} width={avatarSize[size]} height={avatarSize[size]} />
			) : defaultAvatar ? (
				getFirstLetters(defaultAvatar)
			) : (
				children
			)}
		</div>
	);
};
