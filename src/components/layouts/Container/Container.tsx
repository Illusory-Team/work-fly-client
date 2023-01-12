import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { ContainerProps } from './Container.types';

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children, ...props }) => {
	const cl = classNames('w-container m-0-a h-full', className);

	return (
		<div className={cl} {...props}>
			{children}
		</div>
	);
};
