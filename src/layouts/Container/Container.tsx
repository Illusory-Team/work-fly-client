import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { ContainerProps } from './Container.types';
import styles from './Container.module.scss';

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children, ...props }) => {
	const cl = classNames(styles.container, className);

	return (
		<div className={cl} {...props}>
			{children}
		</div>
	);
};
