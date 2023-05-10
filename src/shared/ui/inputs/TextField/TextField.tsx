/* eslint-disable react/display-name */
import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import { Icon } from '@/shared/ui/Icon';

import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.types';

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
			CustomIcon || type === 'password' ? styles.rightPadding : '',
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
							) : (
								<Icon
									name={inputType === 'text' ? 'other_show' : 'other_closed'}
									width={24}
									height={24}
									data-testid="icon-toggle"
								/>
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
