import { InputHTMLAttributes } from 'react';

type ColorType = 'primary' | 'danger' | 'success';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
	color?: ColorType;
	className?: string;
}
