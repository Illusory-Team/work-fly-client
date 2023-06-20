import { FC } from 'react';

import { IFolder } from '@/shared/api';
import { AVATAR2_URL } from '@/shared/lib/constants';
import { Avatar, AvatarGroup, Icon, Typography } from '@/shared/ui';

import styles from './FolderCard.module.scss';
import { CardContentCustom, CardCustom } from './styles';

interface FolderCardProps {
	data: IFolder;
	className?: string;
}

export const FolderCard: FC<FolderCardProps> = ({ data, className = '' }) => {
	return (
		<CardCustom className={className}>
			<CardContentCustom className={styles.content}>
				<div className={styles.contentHead} style={{ background: data.color }}>
					<Icon className={styles.icon} name={data.icon.name} />
					<div className={styles.textContent}>
						<Typography className={styles.head} variant="headline">
							{data.folderName}
						</Typography>
						<Typography className={styles.subHead} variant="caption13_regular">
							{data.owner} <span>{data.tasks}</span>
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
