import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { TextWithCrypticProps } from './TextWithCryptic.types';
import styles from './TextWithCryptic.module.scss';

export const TextWithCryptic: FC<PropsWithChildren<TextWithCrypticProps>> = ({
	children,
	title = '',
	className = '',
	...props
}) => {
	const cl = classNames(styles.container, className);

	return (
		<div className={cl} {...props}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>{children}</p>
		</div>
	);
};
