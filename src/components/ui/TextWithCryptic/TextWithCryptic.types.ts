import { HTMLAttributes } from 'react';

export interface TextWithCrypticProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	className?: string;
}
