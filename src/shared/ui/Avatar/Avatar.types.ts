import { HTMLAttributes } from 'react';

type VariantType = 'circle' | 'square' | 'rounded';
type SizeType = 'l' | 'm' | 's' | 'xs' | 'xxs';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	defaultAvatar?: Nullable<string>;
	variant?: VariantType;
	src?: Nullable<string>;
	alt?: string;
	size?: SizeType;
}
