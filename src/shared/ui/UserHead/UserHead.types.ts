import { HTMLAttributes } from 'react';

type SizeType = 'l' | 'm';

export interface UserHeadProps extends HTMLAttributes<HTMLDivElement> {
	src?: string;
	title?: string;
	size?: SizeType;
	className?: string;
	position?: string;
}
