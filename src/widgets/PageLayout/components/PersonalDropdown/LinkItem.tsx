import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { PersonalLinkType } from '../../types/personal-link.type';

import styles from './PersonalDropdown.module.scss';

type LinkItemProps = PersonalLinkType;

export const LinkItem: FC<LinkItemProps> = ({ title, href, className }) => {
	return (
		<li className={cn(styles.linkItem, className)}>
			<Link className="block" href={href}>
				{title}
			</Link>
		</li>
	);
};
