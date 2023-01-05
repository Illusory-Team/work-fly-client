import { InputHTMLAttributes, ReactNode } from 'react';

type InputType = 'text' | 'password' | 'number';

type VariantType = 'outlined' | 'standard' | 'filled';

type ColorType = 'primary' | 'success' | 'danger';

type SizeType = 'lg' | 'xs';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	color?: ColorType;
	variant?: VariantType;
	icon?: ReactNode | null;
	type?: InputType;
	subText?: string | null;
	label?: string | null;
	className?: string;
	inputSize?: SizeType;
}
