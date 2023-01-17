import classNames from 'classnames';
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { BadgeProps } from './Badge.types';
import styles from './Badge.module.scss';
import { calc } from '@/utils/helpers/calc';

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
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const clBadge = classNames(
		styles.badge,
		styles[color],
		styles[variant],
		invisible && styles.invisible,
		classNameBadge,
	);
	const clContainer = classNames('relative inline-block', className);

	useEffect(() => {
		if (overlap === 'circular') {
			const { x, y } = calc.getCircularCoords(containerRef, horizontal, vertical);
			setX(x);
			setY(y);
		} else {
			const { x, y } = calc.getSquareCoords(containerRef, horizontal, vertical);
			setX(x);
			setY(y);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div ref={containerRef} className={clContainer}>
			<div style={{ left: x, top: y }} className={clBadge}>
				<span>{variant === 'content' && calc.getLimitationNumber(badgeContent, maxValue)}</span>
			</div>
			{children}
		</div>
	);
};
