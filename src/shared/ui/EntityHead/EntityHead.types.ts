import { InputHTMLAttributes } from 'react';

export interface EntityHeadProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	classNameTitle?: string;
	imgHandler?: () => void;
	src?: string;
	title?: string;
	subTitle?: string;
	isChangeable?: boolean;
}
