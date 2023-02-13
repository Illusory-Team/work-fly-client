import { ChangeEvent } from 'react';

export interface EntityHeadProps {
	className?: string;
	classNameTitle?: string;
	imgHandler?: () => void;
	src?: string;
	title?: string;
	subTitle?: string;
	isChangeable?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
