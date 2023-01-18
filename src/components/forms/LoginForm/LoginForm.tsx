import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '@/components/ui/buttons/Button';
import { TextField } from '@/components/ui/inputs/TextField';
import styles from './LoginForm.module.scss';
import { LoginFormProps } from './LoginForm.types';
import { useLoginHookForm } from '@/hooks/auth/useLoginHookForm.hook';

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const { submitHandler, getEmailInputProps, getPasswordInputProps } = useLoginHookForm();

	const cl = classNames(styles.content, className);

	return (
		<div className={cl}>
			<h1 className={styles.title}>Welcome back!</h1>
			<p className={styles.subTitle}>Please, enter your e-mail or phone number to login</p>
			<form className={styles.form} onSubmit={submitHandler}>
				<TextField {...getEmailInputProps} className={styles.input} />
				<TextField {...getPasswordInputProps} className={styles.input} />
				<Button className="mt-10 w-full">Sign in</Button>
			</form>
			<p className={styles.footerText}>
				You have a code?{' '}
				<Link className="font-bold" href="/code-join">
					Join your team
				</Link>
			</p>
			<Link href="/forgot-password" className="text-center block mt-7 font-bold">
				Forgot your password?
			</Link>
		</div>
	);
};
