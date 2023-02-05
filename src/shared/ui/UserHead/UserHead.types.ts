import { HTMLAttributes } from 'react';

export interface UserHeadProps extends HTMLAttributes<HTMLDivElement> {
	src?: string;
	title?: string;
	className?: string;
	position?: string;
}
