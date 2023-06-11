import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Button, FormControl, InputLabel, TextField } from '@/shared/ui';

import { usePasswordChange } from '../../lib';

import styles from './ChangePassword.module.scss';

export const ChangePassword: FC = () => {
	const { submitHandler, control } = usePasswordChange();

	return (
		<form className={styles.container} onSubmit={submitHandler}>
			<FormControl>
				<InputLabel className={styles.label} htmlFor="profile-current-password-change">
					Current password
				</InputLabel>
				<Controller
					control={control}
					render={({ field }) => (
						<TextField
							size="small"
							id="profile-current-password-change"
							className={styles.input}
							type="password"
							placeholder="Enter current password"
							{...field}
						/>
					)}
					name="currentPassword"
				/>
			</FormControl>
			<FormControl>
				<InputLabel className={styles.label} htmlFor="profile-new-password-change">
					New password
				</InputLabel>
				<Controller
					control={control}
					name="newPassword"
					render={({ field }) => (
						<TextField
							size="small"
							id="profile-new-password-change"
							className={styles.input}
							type="password"
							placeholder="Create new password"
							{...field}
						/>
					)}
				/>
			</FormControl>
			<Button type="submit" size="large" className={styles.button}>
				Save Changes
			</Button>
		</form>
	);
};
