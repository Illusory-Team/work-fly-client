import { HTMLAttributes, ReactNode } from 'react';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
	show: boolean;
	closeHandler: () => void;
	mainComponent: ReactNode;
	className?: string;
}
