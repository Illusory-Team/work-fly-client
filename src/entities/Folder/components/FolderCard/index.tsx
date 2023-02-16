import classNames from 'classnames';
import { FC } from 'react';

import { AvatarGroup } from '@/shared/ui/AvatarGroup';
import { Icon } from '@/shared/ui/Icon';

import { IFolder } from '../../types/IFolder';

import styles from './FolderCard.module.scss';

interface FolderCardProps {
	data: IFolder;
	className?: string;
}

export const FolderCard: FC<FolderCardProps> = ({ data, className = '' }) => {
	const cl = classNames(styles.card, className);

	return (
		<div className={cl}>
			<div className={styles.first} style={{ background: data?.color }}>
				<Icon className={styles.icon} name={data.icon.name} />
				<div className={styles.content}>
					<h3>{data.folderName}</h3>
					<div className={styles.wrapper}>
						<p>{data.owner}</p>
						<span>{data.tasks} tasks</span>
					</div>
				</div>
			</div>
			<div className={styles.second}>
				<AvatarGroup size="xxs" title="members" data={data.members} />
				<div className={styles.wrapper}>
					<div className={styles.new}>2 new</div>
					<div className={styles.alert}>2 alert</div>
				</div>
			</div>
		</div>
	);
};
