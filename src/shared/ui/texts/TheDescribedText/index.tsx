import classNames from 'classnames';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './TheDescribedText.module.scss';

interface TheDescribedTextProps extends HTMLAttributes<HTMLDivElement> {
	description: string;
	className?: string;
}

export const TheDescribedText: FC<PropsWithChildren<TheDescribedTextProps>> = ({
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
