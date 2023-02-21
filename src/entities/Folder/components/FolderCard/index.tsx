import classNames from 'classnames';
import { FC, useMemo } from 'react';

import { IFolder } from '@/shared/types';
import { AvatarGroup, IAvatarGroupData } from '@/shared/ui/AvatarGroup';
import { Icon } from '@/shared/ui/Icon';

import styles from './FolderCard.module.scss';

interface FolderCardProps {
	data: IFolder;
	className?: string;
}

export const FolderCard: FC<FolderCardProps> = ({ data, className = '' }) => {
	const cl = classNames(styles.card, className);

	const avatarGroupMembers = useMemo(() => {
		return data.members.map(member => {
			return {
				id: member.id,
				firstName: member.firstName,
				lastName: member.lastName,
				src: member.avatar,
			} as IAvatarGroupData;
		});
	}, [data]);

	return (
		<div className={cl}>
			<div className={styles.first} style={{ background: data?.color }}>
				<Icon className={styles.icon} name={data.icon.name} />
				<div className={styles.content}>
					<h3>{data.folderName}</h3>
					<div className={styles.wrapper}>
						<p>{data.owner}</p>
						<span>
							<span>{data.tasks}</span> tasks
						</span>
					</div>
				</div>
			</div>
			<div className={styles.second}>
				<AvatarGroup size="xxs" title="members" data={avatarGroupMembers} />
				<div className={styles.wrapper}>
					<div className={styles.new}>2 new</div>
					<div className={styles.alert}>2 alert</div>
				</div>
			</div>
		</div>
	);
};
