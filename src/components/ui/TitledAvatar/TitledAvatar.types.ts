import { HTMLAttributes } from 'react';

export interface TitledAvatarProps extends HTMLAttributes<HTMLDivElement> {
	src?: string;
	title?: string;
	className?: string;
}
