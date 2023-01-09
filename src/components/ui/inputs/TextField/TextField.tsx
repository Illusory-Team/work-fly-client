import { FC, useState } from 'react';
import { TextFieldProps } from './TextField.types';
import styles from './TextField.module.scss';
import classNames from 'classnames';

export const TextField: FC<TextFieldProps> = ({
	variant = 'outlined',
	type = 'text',
	icon: Icon = null,
	label = null,
	subText = null,
	className = '',
	inputSize = 'lg',
	color = 'primary',
	id,
	...props
}) => {
	const [inputType, setInputType] = useState(type);

	const clContainer = classNames(
		styles.container,
		styles[inputSize],
		styles[variant],
		styles[color],
		Icon ? styles.isIcon : '',
		className,
	);

	const iconPasswordHandler = () => {
		// eslint-disable-next-line arrow-parens
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
				<input id={id} type={inputType} className={styles.input} {...props} />
				{type === 'password' ? (
					<div onClick={iconPasswordHandler} className={styles.icon}>
						{Icon ? Icon : 'X'}
					</div>
				) : (
					Icon && <div className={styles.icon}>{Icon}</div>
				)}
			</div>
			{subText && <p className={styles.subText}>{subText}</p>}
		</div>
	);
};
