import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { classname } from '@/shared/package/classname';
import { Icon } from '@/shared/ui';

import { LinkItemType } from '../../../constants/link-list';

import styles from './LinkItem.module.scss';

type LinkItemProps = LinkItemType;

export const LinkItem: FC<LinkItemProps> = ({ text, to, icon, count }) => {
	const { pathname } = useLocation();

	return (
		<li className={styles.linkItem}>
			<Link
				to={to}
				className={classname(styles.link, {
					[styles.activeLink]: pathname === to,
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
