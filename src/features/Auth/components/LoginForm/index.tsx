'use client';

import Link from 'next/link';
import { FC } from 'react';

import { FormTemplate } from '@/entities/User';

import { Button } from '@/shared/ui/Button';
import { TextField } from '@/shared/ui/inputs/TextField';

import { useLoginForm } from '../../hooks';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const { submitHandler, getEmailInputProps, getPasswordInputProps } = useLoginForm();

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
				<TextField {...getEmailInputProps} className={styles.input} />
				<TextField {...getPasswordInputProps} className={styles.input} />
				<Button className="mt-10 w-full">Sign in</Button>
			</form>
		</FormTemplate>
	);
};
