import classNames from 'classnames';
import { FC, useState } from 'react';
import { HTMLAttributes } from 'react';

import { ChangePassword } from '../ChangePassword';
import { PersonalDetail } from '../PersonalDetail';

import styles from './Tabs.module.scss';

const tagsData = [
	{ title: 'Personal Details', component: <PersonalDetail /> },
	{ title: 'Password', component: <ChangePassword /> },
];

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}
export const Tabs: FC<TabsProps> = () => {
	const [active, setActive] = useState(0);

	return (
		<>
			<div className={styles.container}>
				{tagsData.map((tag, index) => (
					<h4
						onClick={() => setActive(index)}
						className={classNames(styles.tag, {
							[styles.active]: active === index,
						})}
						key={tag.title}
					>
						{tag.title}
					</h4>
				))}
			</div>
			<div className={styles.content}>{tagsData[active]?.component}</div>
		</>
	);
};
