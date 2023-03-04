import { FC } from 'react';

import { Icon } from '@/shared/ui/Icon';

import { linkList, teamManageLinks } from '../../const/link-list';
import { LinkItem } from '../LinkItem';

import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
	return (
		<section className={styles.sidebar}>
			<div className={styles.container}>
				<header className={styles.head}>
					<Icon name="logo" width={50} height={30} />
				</header>
				<div className={styles.content}>
					<section className={styles.linkSection}>
						<ul className={styles.linksList}>
							{linkList.map(({ text, to, icon }) => (
								<LinkItem key={text} text={text} to={to} icon={icon} />
							))}
						</ul>
					</section>
					<section className={styles.linkSection}>
						<p className={styles.sectionTitle}>{teamManageLinks.title}</p>
						<ul className={styles.linksList}>
							{teamManageLinks.links.map(({ text, to, icon }) => (
								<LinkItem key={text} text={text} to={to} icon={icon} />
							))}
						</ul>
					</section>
				</div>
			</div>
		</section>
	);
};
