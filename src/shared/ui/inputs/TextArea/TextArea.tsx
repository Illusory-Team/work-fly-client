'use client';

import { FC, PropsWithChildren } from 'react';

import { classname } from '@/shared/package/classname';

import styles from './TextArea.module.scss';
import { TextAreaProps } from './TextArea.types';

export const TextArea: FC<PropsWithChildren<TextAreaProps>> = ({ label = '', className = '', children, ...props }) => {
	const cl = classname(styles.container, className);

	return (
		<div className={cl}>
			<label>{label}</label>
			<textarea {...props}>{children}</textarea>
		</div>
	);
};
