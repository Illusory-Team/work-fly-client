import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { Avatar } from '../Avatar/Avatar';

import styles from './AvatarGroup.module.scss';
import { AvatarGroupProps } from './AvatarGroup.types';

export const AvatarGroup: FC<PropsWithChildren<AvatarGroupProps>> = ({
	data,
	size = 'm',
	variant = 'circle',
	title = '',
	className = '',
	max = 2,
	...props
}) => {
	const cl = classNames(styles.container, className);

	return (
		<div {...props} className={cl}>
			{title && <h3 className={styles.title}>{title}</h3>}
			<div className={styles.avatarList}>
				{data
					.filter((i, x) => x < max)
					.map(src => (
						<Avatar size={size} className={styles.avatar} variant={variant} key={src} src={src} alt="" />
					))}
				{data.length - max > 0 && (
					<Avatar size={size} variant={variant} className={styles.limitation}>
						+{data.length - max}
					</Avatar>
				)}
			</div>
		</div>
	);
};
