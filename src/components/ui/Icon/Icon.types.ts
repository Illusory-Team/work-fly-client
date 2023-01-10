import { SVGProps } from 'react';
import { LIST_ICON_NAME } from './Icon.data';

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: typeof LIST_ICON_NAME[number];
	fill?: string;
	width?: number;
	height?: number;
	path?: string;
}
