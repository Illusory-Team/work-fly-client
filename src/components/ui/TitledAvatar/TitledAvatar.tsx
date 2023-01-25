import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { TitledAvatarProps } from './TitledAvatar.types';
import styles from './TitledAvatar.module.scss';
import Image from 'next/image';

export const TitledAvatar: FC<PropsWithChildren<TitledAvatarProps>> = ({
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
