import cn from 'classnames';
import Link from 'next/link';
import { FC, MouseEvent } from 'react';

import { PersonalLinkType } from '../../types/personal-link.type';

import styles from './PersonalDropdown.module.scss';

type LinkItemProps = Omit<PersonalLinkType, 'href'> & {
	onClick?: (event: MouseEvent<HTMLElement>) => void;
	href?: string;
};

export const LinkItem: FC<LinkItemProps> = ({ title, href, className, onClick }) => {
	return (
		<li className={cn(styles.linkItem, className)} onClick={onClick}>
			{href ? (
				<Link className="block" href={href}>
					{title}
				</Link>
			) : (
				<span>{title}</span>
			)}
		</li>
	);
};
