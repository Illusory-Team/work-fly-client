import { ChangeEvent } from 'react';

export interface EntityHeadProps {
	className?: string;
	classNameTitle?: string;
	imgHandler?: () => void;
	src?: string;
	title?: string;
	subTitle?: string;
	isChangeable?: boolean;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
