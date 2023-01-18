type AnchorType = 'right' | 'left' | 'top' | 'bottom';

export interface DrawerProps {
	show: boolean;
	toggleHandler: () => void;
	anchor?: AnchorType;
	className?: string;
}
