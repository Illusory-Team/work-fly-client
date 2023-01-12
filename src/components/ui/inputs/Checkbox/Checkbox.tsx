/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import { Icon } from '../../Icon';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			checkboxSize = 'm',
			color = 'primary',
			label = '',
			labelPlacement = 'right',
			checkedIcon = null,
			notCheckedIcon = null,
			className = '',
			...props
		},
		ref,
	) => {
		const inputRef = useRef<HTMLInputElement>(null);
		useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

		const clContainer = classNames(
			styles.container,
			styles[labelPlacement],
			styles[color],
			styles[checkboxSize],
			className,
		);
		const clChecked = classNames(styles.interface, styles.checked);
		const clNotChecked = classNames(styles.interface, styles.notChecked);

		const clickHandler = () => {
			if (inputRef.current) {
				inputRef.current.click();
			}
		};

		return (
			<div className={clContainer}>
				{label && (
					<div className={styles.label} onClick={clickHandler}>
						{label}
					</div>
				)}
				<input ref={inputRef} className={styles.checkbox} type="checkbox" {...props} />
				<div onClick={clickHandler} className={clChecked}>
					{checkedIcon ? checkedIcon : <Icon name="other_yes" className={styles.defaultIcon} />}
				</div>
				<div onClick={clickHandler} className={clNotChecked}>
					{notCheckedIcon ? notCheckedIcon : <div className={styles.defaultBorder}></div>}
				</div>
			</div>
		);
	},
);
