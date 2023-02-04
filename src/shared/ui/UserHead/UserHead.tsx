import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { Avatar } from '../Avatar';

import styles from './UserHead.module.scss';
import { UserHeadProps } from './UserHead.types';

export const UserHead: FC<PropsWithChildren<UserHeadProps>> = ({
	children,
	src = '',
	title = '',
	size = 'l',
	className = '',
	...props
}) => {
	const cl = classNames(styles.container, styles[size], className);

	return (
		<div className={cl} {...props}>
			<Avatar src={src ?? '/anonym.png'} />
			<div className={styles.textContent}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.subTitle}>{children}</p>
			</div>
		</div>
	);
};
