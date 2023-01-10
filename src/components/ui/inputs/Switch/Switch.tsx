import { FC, useRef } from 'react';
import { SwitchProps } from './Switch.types';
import styles from './Switch.module.scss';
import classNames from 'classnames';

export const Switch: FC<SwitchProps> = ({ className = '', color = 'primary', ...props }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const cl = classNames(styles.container, styles[color], className);

	const clickHandler = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	return (
		<div className={cl} onClick={clickHandler}>
			<input ref={inputRef} type="checkbox" className={styles.checkbox} {...props} />
			<div className={styles.switchBg}></div>
			<div className={styles.circle}></div>
		</div>
	);
};
