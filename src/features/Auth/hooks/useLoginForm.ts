import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from '@/entities/User/model/user.slice';

import { TextFieldProps } from '@/shared/ui/inputs/TextField';

import {
	EMAIL_PATTERN_MESSAGE,
	FIELD_REQUIRED,
	PASSWORD_PATTERN_MESSAGE,
	REGULAR_EMAIL,
	REGULAR_PASSWORD,
} from '../lib/constants';
import { getEmailMaxLength, getPasswordMinLength } from '../lib/helpers';
import { AuthService } from '../services';
import { IErrorAuthResponse, IFormLogin } from '../types';

export const useLoginForm = () => {
	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLogin>({ mode: 'onBlur' });
	const router = useRouter();

	const dispatch = useDispatch();

	const { mutateAsync } = useMutation('login-user', (data: IFormLogin) => AuthService.login(data), {
		onSuccess(user) {
			if (user) {
				dispatch(setCurrentUser(user.data));
			}
		},
	});

	const submitHandler = handleSubmit(async (data: IFormLogin) => {
		try {
			await mutateAsync(data);
			await router.push('/');
		} catch (error) {
			const errorMessage = (error as AxiosError<IErrorAuthResponse>).response?.data.message;
			if (errorMessage) {
				setError('email', { type: 'custom', message: errorMessage });
				setError('password', { type: 'custom', message: errorMessage });
			} else {
				setError('email', { type: 'custom', message: (error as AxiosError).message });
				setError('password', { type: 'custom', message: (error as AxiosError).message });
			}
		}
	});

	const getEmailInputProps: TextFieldProps = {
		...register('email', {
			required: FIELD_REQUIRED,
			maxLength: getEmailMaxLength(30),
			pattern: {
				value: REGULAR_EMAIL,
				message: EMAIL_PATTERN_MESSAGE,
			},
		}),
		label: 'E-mail or phone number',
		placeholder: 'youmail@gmail.com',
		subText: errors.email?.message && errors.email.message,
		color: errors.email?.message ? 'danger' : 'primary',
	};

	const getPasswordInputProps: TextFieldProps = {
		...register('password', {
			required: FIELD_REQUIRED,
			minLength: getPasswordMinLength(8),
			pattern: {
				value: REGULAR_PASSWORD,
				message: PASSWORD_PATTERN_MESSAGE,
			},
		}),
		label: 'Password',
		type: 'password',
		placeholder: 'password',
		color: errors.password?.message ? 'danger' : 'primary',
		subText: errors.password?.message && errors.password.message,
	};

	return {
		submitHandler,
		getEmailInputProps,
		getPasswordInputProps,
	};
};
