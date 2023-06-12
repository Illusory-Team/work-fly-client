import { ChangeEvent } from 'react';

import { SizeType } from '../../types';

export interface EntityHeadProps {
	className?: string;
	classNameText?: string;
	classNameAvatar?: string;
	imgHandler?: () => void;
	src?: string;
	alt?: string;
	title?: string;
	subTitle?: string;
	isChangeable?: boolean;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	avatarSize?: SizeType;
}
