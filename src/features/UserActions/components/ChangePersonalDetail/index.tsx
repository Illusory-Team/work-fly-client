'use client';

import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Button, FormControl, InputLabel, MenuItem, Select, TextArea, TextField } from '@/shared/ui';

import { useChangePersonalDetail } from '../../lib';

import styles from './ChangePersonalDetail.module.scss';

export const ChangePersonalDetail: FC = () => {
	const { control, submitHandler } = useChangePersonalDetail();

	// FIX ME - кратко говоря, какая то жесть с Select, надо будет разобраться, думаю VES edword знает более оптимальный вариант фикса
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles.container}>
				<FormControl className={styles.control}>
					<InputLabel htmlFor="change-personal-profile-phone">Phone</InputLabel>
					<Controller
						control={control}
						name="phone"
						render={({ field }) => (
							<TextField
								id="change-personal-profile-phone"
								placeholder="+996771435642"
								className={styles.input}
								{...field}
							/>
						)}
					/>
				</FormControl>
				<FormControl className={styles.control}>
					<InputLabel htmlFor="change-personal-profile-email">E-mail</InputLabel>
					<Controller
						control={control}
						name="email"
						render={({ field }) => (
							<TextField
								id="change-personal-profile-email"
								placeholder="Kavoon@gmail.com..."
								className={styles.input}
								{...field}
							/>
						)}
					/>
				</FormControl>
				<FormControl className={styles.control}>
					<InputLabel id="change-personal-profile-department">Department</InputLabel>
					<Controller
						control={control}
						name="department"
						render={({ field }) => (
							<Select
								labelId="change-personal-profile-department"
								placeholder="Choose"
								value={field.value}
								onChange={field.onChange}
								className={styles.input}
							>
								<MenuItem value="value-1">Value 1</MenuItem>
								<MenuItem value="value-2">Value 2</MenuItem>
							</Select>
						)}
					/>
				</FormControl>
				<FormControl className={styles.control}>
					<InputLabel htmlFor="change-personal-profile-manager">Manager</InputLabel>
					<Controller
						control={control}
						name="manager"
						render={({ field }) => (
							<Select
								labelId="change-personal-profile-manager"
								placeholder="Choose"
								value={field.value}
								onChange={field.onChange}
								className={styles.input}
							>
								<MenuItem value="value-1">Value 1</MenuItem>
								<MenuItem value="value-2">Value 2</MenuItem>
							</Select>
						)}
					/>
				</FormControl>
				<FormControl className={styles.control}>
					<InputLabel htmlFor="change-personal-profile-birthday">Birthday</InputLabel>
					<Controller
						control={control}
						name="birthday"
						render={({ field }) => (
							<TextField
								id="change-personal-profile-birthday"
								placeholder="Choose date..."
								className={styles.input}
								{...field}
							/>
						)}
					/>
				</FormControl>
				<FormControl className={styles.control}>
					<InputLabel htmlFor="change-personal-profile-address">Address</InputLabel>
					<Controller
						control={control}
						name="address"
						render={({ field }) => (
							<TextField id="change-personal-profile-address" placeholder="Text" className={styles.input} {...field} />
						)}
					/>
				</FormControl>
			</div>
			<TextArea placeholder="Add more details to your profile" label="Descriptor" className="mt-14"></TextArea>
			<Button className={styles.button} type="submit">
				Save Changes
			</Button>
		</form>
	);
};
