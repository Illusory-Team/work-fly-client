import { HTMLAttributes } from 'react';

type VariantType = 'circle' | 'square' | 'rounded';

export enum AvatarSize {
	'l' = 68,
	'm' = 56,
	's' = 48,
	'xs' = 36,
	'xxs' = 24,
}

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	defaultAvatar?: Nullable<string>;
	variant?: VariantType;
	src?: Nullable<string>;
	alt?: string;
	size?: keyof typeof AvatarSize;
}
