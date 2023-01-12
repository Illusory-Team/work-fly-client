/* eslint-disable react/display-name */
import { forwardRef, useState } from 'react';
import { TextFieldProps } from './TextField.types';
import styles from './TextField.module.scss';
import classNames from 'classnames';
import { Icon } from '../../Icon';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			variant = 'outlined',
			type = 'text',
			icon: CustomIcon = null,
			label = null,
			subText = null,
			className = '',
			inputSize = 'lg',
			color = 'primary',
			id,
			...props
		},
		ref,
	) => {
		const [inputType, setInputType] = useState(type);

		const clContainer = classNames(
			styles.container,
			styles[inputSize],
			styles[variant],
			styles[color],
			CustomIcon ? styles.isIcon : '',
			className,
		);

		const iconPasswordHandler = () => {
			setInputType(prev => (prev === 'text' ? 'password' : 'text'));
		};

		return (
			<div className={clContainer}>
				{label && (
					<label className={styles.label} htmlFor={id}>
						{label}
					</label>
				)}
				<div className={styles.inputContainer}>
					<input ref={ref} id={id} type={inputType} className={styles.input} {...props} />
					{type === 'password' ? (
						<div onClick={iconPasswordHandler} className={styles.icon}>
							{CustomIcon ? (
								CustomIcon
							) : inputType === 'text' ? (
								<Icon name="other_show" width={24} height={24} />
							) : (
								<Icon name="other_closed" width={24} height={24} />
							)}
						</div>
					) : (
						CustomIcon && <div className={styles.icon}>{CustomIcon}</div>
					)}
				</div>
				{subText && <p className={styles.subText}>{subText}</p>}
			</div>
		);
	},
);
