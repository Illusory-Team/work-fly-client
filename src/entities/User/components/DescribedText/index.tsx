import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { classname } from '@/shared/package/classname';

import styles from './DescribedText.module.scss';

interface DescribedTextProps extends HTMLAttributes<HTMLDivElement> {
	description: string;
	className?: string;
}

export const DescribedText: FC<PropsWithChildren<DescribedTextProps>> = ({
	description,
	className = '',
	children,
	...props
}) => {
	const cl = classname(styles.container, className);

	return (
		<div className={cl} {...props}>
			<h5>{description}</h5>
			<p>{children}</p>
		</div>
	);
};
