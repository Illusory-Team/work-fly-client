type AnchorType = 'right' | 'left' | 'top' | 'bottom';
type SizeType = 'l' | 'm';

export interface DrawerProps {
	isShow: boolean;
	size?: SizeType;
	closeHandler: () => void;
	anchor?: AnchorType;
	className?: string;
}
