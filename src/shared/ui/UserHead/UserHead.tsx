import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './UserHead.module.scss';
import { UserHeadProps } from './UserHead.types';

export const UserHead: FC<UserHeadProps> = ({
	src = '',
	title = '',
	className = '',
	position = 'manager',
	...props
}) => {
	const cl = classNames(styles.container, className);

	return (
		<div className={cl} {...props}>
			<Image src={src ? src : '/anonym.png'} width={56} height={56} alt="" />
			<div className={styles.textContent}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.position}>{position}</p>
			</div>
		</div>
	);
};
