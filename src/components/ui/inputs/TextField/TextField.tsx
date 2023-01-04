import { FC, useRef, useState } from 'react';
import { TextFieldProps } from './TextField.types';
import styles from './TextField.module.scss';
import classNames from 'classnames';

const TextField: FC<TextFieldProps> = ({
	variant = 'outlined',
	type = 'text',
	icon: Icon = null,
	label = null,
	subText = null,
	className = '',
	placeholder = '',
	inputSize = 'lg',
	color = 'primary',
	id,
	...props
}) => {
	const firstType = useRef(type);
	const [inputType, setInputType] = useState(type);

	const clContainer = classNames(
		styles.container,
		styles[inputSize],
		styles[variant],
		styles[color],
		Icon ? styles.isIcon : '',
		className,
	);

	const iconHandler = () => {
		if (firstType.current === 'password') {
			// eslint-disable-next-line arrow-parens
			setInputType((prev) => (prev === 'text' ? 'password' : 'text'));
		}
	};

	return (
		<div className={clContainer}>
			{label ? (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			) : (
				''
			)}
			<div className={styles.inputContainer}>
				<input
					disabled={false}
					id={id}
					type={inputType}
					className={styles.input}
					placeholder={placeholder ? placeholder : firstType.current}
					{...props}
				/>
				{Icon ? <Icon onClick={iconHandler} className={styles.icon} /> : ''}
			</div>
			{subText ? <p className={styles.subText}>{subText}</p> : ''}
		</div>
	);
};

export default TextField;
