import { FC, PropsWithChildren } from 'react';
import { TextAreaProps } from './TextArea.types';
import styles from './TextArea.module.scss';
import classNames from 'classnames';

export const TextArea: FC<PropsWithChildren<TextAreaProps>> = ({ label = '', className = '', children, ...props }) => {
	const cl = classNames(styles.container, className);

	return (
		<div className={cl}>
			<label>{label}</label>
			<textarea {...props}>{children}</textarea>
		</div>
	);
};
