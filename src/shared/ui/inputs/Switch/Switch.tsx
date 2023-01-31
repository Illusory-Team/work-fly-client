/* eslint-disable react/display-name */
import classNames from 'classnames';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import styles from './Switch.module.scss';
import { SwitchProps } from './Switch.types';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
	({ className = '', color = 'primary', ...props }, ref) => {
		const inputRef = useRef<HTMLInputElement>(null);
		const cl = classNames(styles.container, styles[color], className);

		useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

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
	},
);
