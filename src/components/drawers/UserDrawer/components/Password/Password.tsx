import { Button } from '@/components/ui/buttons/Button';
import { TextField } from '@/components/ui/inputs/TextField';
import { FC } from 'react';
import styles from './Password.module.scss';

export const Password: FC = () => {
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
