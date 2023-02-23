type DirectionType = 'right' | 'left' | 'top' | 'bottom';
type SizeType = 'l' | 'm';

export interface DrawerProps {
	isShow?: boolean;
	size?: SizeType;
	closeHandler: () => void;
	direction?: DirectionType;
	className?: string;
	transitionDuration?: number;
}
