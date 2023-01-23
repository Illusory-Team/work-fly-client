type AnchorType = 'right' | 'left' | 'top' | 'bottom';
type SizeType = 'l' | 'm';

export interface DrawerProps {
	show: boolean;
	size?: SizeType;
	toggleHandler: () => void;
	anchor?: AnchorType;
	className?: string;
}
