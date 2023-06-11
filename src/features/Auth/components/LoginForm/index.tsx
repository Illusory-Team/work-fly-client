'use client';

import Link from 'next/link';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { FormTemplate } from '@/entities/User';

import { Button, FormControl, InputLabel, TextField } from '@/shared/ui';

import { useLoginForm } from '../../lib';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const { submitHandler, control } = useLoginForm();

	return (
		<FormTemplate
			className={className}
			title="Welcome back!"
			subText="Please, enter your e-mail or phone number to login"
			footer={
				<>
					You have a code?{' '}
					<Link className="font-bold" href="/code-join">
						Join your team
					</Link>
					<Link href="/forgot-password" className="text-center block mt-7 font-bold">
						Forgot your password?
					</Link>
				</>
			}
		>
			<form className={styles.form} onSubmit={submitHandler}>
				<FormControl className={styles.control}>
					<InputLabel>E-mail or phone number</InputLabel>
					<Controller
						control={control}
						name="email"
						render={({ field }) => <TextField {...field} className={styles.input} />}
					/>
				</FormControl>
				<FormControl className={styles.control}>
					<InputLabel>Password</InputLabel>
					<Controller
						control={control}
						name="password"
						render={({ field }) => <TextField {...field} className={styles.input} />}
					/>
				</FormControl>
				<Button className={styles.button} type="submit">
					Sign in
				</Button>
			</form>
		</FormTemplate>
	);
};
