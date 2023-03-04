import Link from 'next/link';
import { FC } from 'react';

import { Icon } from '@/shared/ui/Icon';

import { LinkItemType } from '../../const/link-list';

import styles from './LinkItem.module.scss';

type LinkItemProps = LinkItemType;

export const LinkItem: FC<LinkItemProps> = ({ text, to, icon }) => {
	return (
		<li className={styles.linkItem}>
			<Link href={to} className={styles.link}>
				<span className={styles.iconWrap}>
					<Icon name={icon} width={20} height={20} />
				</span>
				<span className={styles.text}>{text}</span>
			</Link>
		</li>
	);
};
