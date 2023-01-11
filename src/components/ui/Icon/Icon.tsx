import { FC } from 'react';
import { IconProps } from './Icon.types';

export const Icon: FC<IconProps> = ({
	name,
	path = 'icons',
	width = 20,
	height = 20,
	fill = 'currentColor',
	...props
}) => {
	return (
		<svg width={width} aria-hidden="true" focusable="false" height={height} fill={fill} {...props}>
			<use xlinkHref={`/images/sprites/${path}.svg#${name}`} />
		</svg>
	);
};
