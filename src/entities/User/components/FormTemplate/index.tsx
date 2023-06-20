import { FC, PropsWithChildren, ReactNode } from 'react';

import { classname } from '@/shared/package/classname';

import styles from './FormTemplate.module.scss';

interface LoginFormProps {
	title?: string;
	subText?: string;
	className?: string;
	footer?: Nullable<ReactNode>;
}

export const FormTemplate: FC<PropsWithChildren<LoginFormProps>> = ({
	title = '',
	subText = '',
	className = '',
	footer = null,
	children,
}) => {
	const cl = classname(styles.content, className);

	return (
		<div className={cl}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.subTitle}>{subText}</p>
			{children}
			<div className={styles.footer}>{footer}</div>
		</div>
	);
};
