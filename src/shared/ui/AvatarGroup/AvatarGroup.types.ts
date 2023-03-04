import { AvatarProps } from '../Avatar';

type AvatarAllProps = Omit<AvatarProps, 'alt' | 'classNames'>;

export interface IAvatarGroupData {
	id: string;
	firstName: string;
	lastName: string;
	src: Nullable<string>;
}

export interface AvatarGroupProps extends AvatarAllProps {
	data: IAvatarGroupData[];
	title?: string;
	maxView?: number;
	className?: string;
}
