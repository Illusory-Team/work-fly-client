import { FC } from 'react';

import { Folder } from '@/shared/api';
import { AVATAR2_URL } from '@/shared/lib/constants';
import { Avatar, AvatarGroup, Icon, Typography } from '@/shared/ui';

import styles from './FolderCard.module.scss';
import { CardContentCustom, CardCustom } from './styles';

interface FolderCardProps {
	data: Folder;
	className?: string;
}

export const FolderCard: FC<FolderCardProps> = ({ data, className = '' }) => {
	const { color, icon, name, owner, userCount } = data;

	return (
		<CardCustom className={className}>
			<CardContentCustom className={styles.content}>
				<div className={styles.contentHead} style={{ background: color }}>
					<Icon className={styles.icon} name={icon} />
					<div className={styles.textContent}>
						<Typography className={styles.head} variant="headline">
							{name}
						</Typography>
						<Typography className={styles.subHead} variant="caption13_regular">
							{owner.fullName} <span>{userCount}</span>
						</Typography>
					</div>
				</div>
				<div className={styles.content}></div>
				<div className={styles.contentFooter}>
					<div className={styles.member}>
						<Typography variant="caption13_regular">Members</Typography>
						<AvatarGroup max={3} size="small">
							<Avatar size="small" src={AVATAR2_URL} />
							<Avatar size="small" src={AVATAR2_URL} />
							<Avatar size="small" src={AVATAR2_URL} />
							<Avatar size="small" src={AVATAR2_URL} />
						</AvatarGroup>
					</div>
				</div>
			</CardContentCustom>
		</CardCustom>
	);
};
