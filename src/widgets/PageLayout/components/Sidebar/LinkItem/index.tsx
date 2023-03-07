import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Icon } from '@/shared/ui/Icon';

import { LinkItemType } from '../../../const/link-list';

import styles from './LinkItem.module.scss';

type LinkItemProps = LinkItemType;

export const LinkItem: FC<LinkItemProps> = ({ text, to, icon, count }) => {
	const router = useRouter();

	return (
		<li className={styles.linkItem}>
			<Link
				href={to}
				className={cn(styles.link, {
					[styles.activeLink]: router.pathname === to,
				})}
			>
				<div className={styles.textContent}>
					<span className={styles.iconWrap}>
						<Icon name={icon} width={20} height={20} />
					</span>
					<span className={styles.text}>{text}</span>
				</div>
				{count > 0 && <span className={styles.count}>{count}</span>}
			</Link>
		</li>
	);
};