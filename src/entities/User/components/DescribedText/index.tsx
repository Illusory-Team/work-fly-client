import classNames from 'classnames';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

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
	const cl = classNames(styles.container, className);

	return (
		<div className={cl} {...props}>
			<h5>{description}</h5>
			<p>{children}</p>
		</div>
	);
};
