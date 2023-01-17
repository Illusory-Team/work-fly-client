import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { BadgeProps } from './Badge.types';
import styles from './Badge.module.scss';

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
	color = 'primary',
	badgeContent = 0,
	invisible = false,
	maxValue = 9,
	overlap = 'square',
	variant = 'content',
	horizontal = 'right',
	vertical = 'top',
	className = '',
	classNameBadge = '',
	children,
}) => {
	const clBadge = classNames(
		styles.badge,
		styles[color],
		styles[vertical],
		styles[horizontal],
		styles[overlap],
		styles[variant],
		invisible && styles.invisible,
		classNameBadge,
	);
	const clContainer = classNames('relative inline-block', className);

	const calcMaxValue = (currentNum: number, maxNum: number) => {
		if (currentNum > maxNum) return `${maxNum}+`;
		else return currentNum;
	};

	return (
		<div className={clContainer}>
			<div className={clBadge}>
				<span>{variant === 'content' && calcMaxValue(badgeContent, maxValue)}</span>
			</div>
			{children}
		</div>
	);
};
