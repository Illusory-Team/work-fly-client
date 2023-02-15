import { HTMLAttributes } from 'react';

type VariantType = 'circle' | 'square' | 'rounded';
type SizeType = 'l' | 'm' | 's' | 'xs' | 'xxs';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	variant?: VariantType;
	src?: string;
	alt?: string;
	size?: SizeType;
}
