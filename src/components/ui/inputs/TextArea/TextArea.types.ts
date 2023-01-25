import { HTMLAttributes } from 'react';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	label?: string;
}
