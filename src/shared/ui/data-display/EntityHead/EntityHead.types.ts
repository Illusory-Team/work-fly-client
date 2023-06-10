import { ChangeEvent } from 'react';

import { AvatarSize } from '@/shared/ui/Avatar/Avatar.types';

export interface EntityHeadProps {
	className?: string;
	classNameText?: string;
	classNameAvatar?: string;
	imgHandler?: () => void;
	src?: Nullable<string>;
	defaultAvatar?: string;
	title?: string;
	subTitle?: string;
	isChangeable?: boolean;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	avatarSize?: keyof typeof AvatarSize;
}
