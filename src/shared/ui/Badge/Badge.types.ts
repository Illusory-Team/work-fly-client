type VariantType = 'content' | 'dot';
type VerticalType = 'top' | 'bottom';
type HorizontalType = 'left' | 'right';
type OverlapType = 'square' | 'circular';
type ColorType = 'primary' | 'success' | 'danger';

export interface BadgeProps {
	invisible?: boolean;
	variant?: VariantType;
	className?: string;
	classNameBadge?: string;
	vertical?: VerticalType;
	horizontal?: HorizontalType;
	badgeContent?: number;
	maxValue?: number;
	overlap?: OverlapType;
	color?: ColorType;
}
