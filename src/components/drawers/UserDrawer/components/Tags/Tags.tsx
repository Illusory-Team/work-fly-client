import classNames from 'classnames';
import { FC, useState } from 'react';
import { Password } from '../Password';
import { PersonalDetail } from '../PersonalDetail';
import styles from './Tags.module.scss';
import { TagsProps } from './Tags.types';

const tagsData = [
	{ title: 'Personal Details', component: <PersonalDetail /> },
	{ title: 'Password', component: <Password /> },
	{ title: 'Settings', component: <h2>Settings</h2> },
];

export const Tags: FC<TagsProps> = () => {
	const [active, setActive] = useState(tagsData[0].title);

	return (
		<>
			<div className={styles.container}>
				{tagsData.map(tag => (
					<h4
						onClick={() => setActive(tag.title)}
						className={classNames(styles.tag, active === tag.title && styles.active)}
						key={tag.title}
					>
						{tag.title}
					</h4>
				))}
			</div>
			<div className={styles.content}>{tagsData.find(tag => tag.title === active)?.component}</div>
		</>
	);
};
