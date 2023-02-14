import { AvatarProps } from '../Avatar';

type AvatarAllProps = Omit<AvatarProps, 'alt' | 'classNames'>;

export interface AvatarGroupProps extends AvatarAllProps {
	data: string[];
	title?: string;
	max?: number;
	className?: string;
}
