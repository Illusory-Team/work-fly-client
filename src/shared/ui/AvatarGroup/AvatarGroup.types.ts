import { AvatarProps } from '../Avatar';

type AvatarAllProps = Omit<AvatarProps, 'alt' | 'classNames'>;

export interface AvatarGroupProps extends AvatarAllProps {
	data: string[];
	title?: string;
	maxView?: number;
	className?: string;
}
