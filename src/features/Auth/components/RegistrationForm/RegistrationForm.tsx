import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { IFormRegistration } from '@/features/Auth';

import { Button } from '@/shared/ui/Button';
import { TextField } from '@/shared/ui/inputs/TextField';

import styles from './RegistrationForm.module.scss';

interface RegistrationFormProps {
	className?: string;
}

export const RegistrationForm: FC<RegistrationFormProps> = ({ className }) => {
	const { register, handleSubmit } = useForm<IFormRegistration>();

	const cl = classNames(styles.content, className);

	const submitHandler = (data: IFormRegistration) => {
		return data;
	};

	return (
		<div className={cl}>
			<h1 className={styles.title}>Welcome back!</h1>
			<p className={styles.subTitle}>Please, enter your e-mail or phone number to login</p>
			<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
				<TextField {...register('email', { required: true })} className={styles.input} label="E-mail*" />
				<TextField
					{...register('phone', { required: true })}
					placeholder="Phone"
					className={styles.input}
					label="Phone number*"
					type="number"
				/>
				<Button className="mt-8 w-full">Sign in</Button>
			</form>
			<p className={styles.footerText}>
				You have a code?{' '}
				<Link className="font-bold" href="/code-join">
					Join your team
				</Link>
			</p>
		</div>
	);
};
