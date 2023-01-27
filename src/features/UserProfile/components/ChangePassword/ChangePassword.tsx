import { FC } from 'react';

import { Button } from '@/shared/ui/Button';
import { TextField } from '@/shared/ui/inputs/TextField';

import styles from './ChangePassword.module.scss';

export const ChangePassword: FC = () => {
	return (
		<form className={styles.container}>
			<TextField
				className={styles.input}
				type="password"
				placeholder="Enter current password"
				label="Current password"
			/>
			<TextField className={styles.input} type="password" placeholder="Create new password" label="New password" />
			<Button className={styles.button}>Save Changes</Button>
		</form>
	);
};
