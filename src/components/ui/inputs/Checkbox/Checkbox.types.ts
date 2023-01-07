import { InputHTMLAttributes, ReactNode } from 'react';

type CheckboxSize = 'l' | 'm';
type LabelPlacementType = 'top' | 'left' | 'right' | 'bottom';
type ColorType = 'primary' | 'success' | 'danger';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	checkboxSize?: CheckboxSize;
	label?: string;
	labelPlacement?: LabelPlacementType;
	color?: ColorType;
	notCheckedIcon?: ReactNode | null;
	checkedIcon?: ReactNode | null;
	className?: string;
}
