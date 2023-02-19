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
	maxView = 2,
	...props
}) => {
	const cl = classNames(styles.container, styles[size], className);
	const limitation = data.length - maxView;

	return (
		<div {...props} className={cl}>
			{title && <h3 className={styles.title}>{title}</h3>}
			<div className={styles.avatarList}>
				{data.slice(0, maxView).map(avatar => (
					<Avatar
						size={size}
						className={styles.avatar}
						variant={variant}
						key={avatar.id}
						defaultAvatar={`${avatar.firstName} ${avatar.lastName}`}
						src={avatar.src}
						alt=""
					/>
				))}
				{limitation > 0 && (
					<Avatar size={size} variant={variant} className={styles.limitation}>
						+{limitation}
					</Avatar>
				)}
			</div>
		</div>
	);
};
