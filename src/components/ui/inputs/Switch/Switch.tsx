import { FC, useState } from 'react';
import { SwitchProps } from './Switch.types';
import styles from './Switch.module.scss';
import classNames from 'classnames';

export const Switch: FC<SwitchProps> = ({ className = '', color = 'primary', checked = false, ...props }) => {
	const [check, setCheck] = useState(checked);
	const cl = classNames(styles.container, styles[color], className);

	return (
		<div className={cl} onClick={() => setCheck(prev => !prev)}>
			<input checked={check} type="checkbox" className={styles.checkbox} {...props} />
			<div className={styles.switchBg}></div>
			<div className={styles.circle}></div>
		</div>
	);
};
