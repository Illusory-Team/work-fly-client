import classNames from 'classnames';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import styles from './UserHead.module.scss';
import { UserHeadProps } from './UserHead.types';

export const UserHead: FC<PropsWithChildren<UserHeadProps>> = ({
	children,
	src = '',
	title = '',
	className = '',
	...props
}) => {
	const cl = classNames(styles.container, className);

	return (
		<div className={cl} {...props}>
			<Image src={src} width={56} height={56} alt="" />
			<div className={styles.textContent}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.subTitle}>{children}</p>
			</div>
		</div>
	);
};
