import { FC } from 'react';

import { Icon } from '@/shared/ui';

import { linkList, teamManageLinks } from '../../constants';

import { LinkItem } from './LinkItem';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
	return (
		<section className={styles.sidebar}>
			<div className={styles.container}>
				<header className="flex pl-6">
					<Icon name="logo" width={50} height={30} />
				</header>
				<div className={styles.content}>
					<section className={styles.linkSection}>
						<ul className={styles.linksList}>
							{linkList.map(({ text, to, icon, count }) => (
								<LinkItem key={text} count={count} text={text} to={to} icon={icon} />
							))}
						</ul>
					</section>
					<section className={styles.linkSection}>
						<p className={styles.sectionTitle}>{teamManageLinks.title}</p>
						<ul className={styles.linksList}>
							{teamManageLinks.links.map(({ text, to, icon, count }) => (
								<LinkItem count={count} key={text} text={text} to={to} icon={icon} />
							))}
						</ul>
					</section>
				</div>
			</div>
		</section>
	);
};
