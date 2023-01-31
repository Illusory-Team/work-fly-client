import classNames from 'classnames';
import { CSSProperties, FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

import { getCircularCoords, getLimitationNumber } from '@/shared/helpers';

import styles from './Badge.module.scss';
import { BadgeProps } from './Badge.types';

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
	const [coords, setCoords] = useState<CSSProperties>({});
	const containerRef = useRef<HTMLDivElement>(null);
	const clBadge = classNames(
		styles.badge,
		styles[color],
		styles[vertical],
		styles[horizontal],
		styles[variant],
		invisible && styles.invisible,
		classNameBadge,
	);
	const clContainer = classNames('relative inline-block', className);

	useEffect(() => {
		if (overlap === 'circular') {
			const { x, y } = getCircularCoords(containerRef, horizontal, vertical);
			setCoords({ left: x, top: y });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div ref={containerRef} className={clContainer}>
			<div style={coords} className={clBadge}>
				<span>{variant === 'content' && getLimitationNumber(badgeContent, maxValue)}</span>
			</div>
			{children}
		</div>
	);
};
