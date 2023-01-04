import { FC, HTMLAttributes, InputHTMLAttributes } from 'react';

type InputType = 'text' | 'password' | 'number';

type VariantType = 'outlined' | 'standard' | 'filled';

type ColorType = 'primary' | 'success' | 'danger';

type SizeType = 'lg' | 'xs';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	color?: ColorType;
	variant?: VariantType;
	icon?: FC<HTMLAttributes<HTMLElement>> | null;
	type?: InputType;
	subText?: string | null;
	label?: string | null;
	className?: string;
	placeholder?: string;
	inputSize?: SizeType;
}
