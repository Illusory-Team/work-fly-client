import classNames from 'classnames';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children, ...props }) => {
	const cl = classNames(styles.container, className);

	return (
		<div className={cl} {...props}>
			{children}
		</div>
	);
};
