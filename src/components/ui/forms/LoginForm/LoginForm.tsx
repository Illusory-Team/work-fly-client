import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../Button';
import { TextField } from '../../inputs/TextField';
import styles from './LoginForm.module.scss';
import { ILogin, LoginFormProps } from './LoginForm.types';

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const { register, handleSubmit } = useForm<ILogin>();

	const cl = classNames(styles.content, className);

	const submitHandler = (data: ILogin) => {
		return data;
	};

	return (
		<div className={cl}>
			<h1 className={styles.title}>Welcome back!</h1>
			<p className={styles.subTitle}>Please, enter your e-mail or phone number to login</p>
			<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
				<TextField {...register('email', { required: true })} className={styles.input} label="E-mail or phone number" />
				<TextField
					{...register('password', { required: true })}
					placeholder="Password"
					className={styles.input}
					label="Password"
					type="password"
				/>
				<Button className="mt-8 w-full">Sign in</Button>
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
