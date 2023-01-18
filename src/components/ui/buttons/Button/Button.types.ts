import { HTMLAttributes } from 'react';

type BtnVariantType = 'default' | 'outlined' | 'square';
type BtnSizeType = 'l' | 'm' | 's' | 'xs';
type BtnColorType = 'primary' | 'secondary' | 'danger' | 'success';

export interface BtnProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: BtnVariantType;
	size?: BtnSizeType;
	color?: BtnColorType;
}
