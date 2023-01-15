import { TextFieldProps } from '@/components/ui/inputs/TextField/TextField.types';
import authService from '@/services/auth';
import {
	EMAIL_MAX_LENGTH,
	EMAIL_PATTERN_MESSAGE,
	FIELD_REQUIRED,
	PASSWORD_MIN_LENGTH,
	PASSWORD_PATTERN_MESSAGE,
	REGULAR_EMAIL,
	REGULAR_PASSWORD,
} from '@/utils/constants/auth/auth.const';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { IErrorAuthResponse } from 'shared/types/auth/IErrorAuth.types';
import { IFormLogin } from 'shared/types/auth/IFormLogin.types';

export const useLoginHookForm = () => {
	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLogin>({ mode: 'onChange' });

	const submitHandler = handleSubmit(async (data: IFormLogin) => {
		try {
			await authService.login(data);
		} catch (e) {
			const errorMessage = (e as AxiosError<IErrorAuthResponse>).response?.data.message;
			if (errorMessage) {
				setError('email', { type: 'custom', message: errorMessage });
				setError('password', { type: 'custom', message: errorMessage });
			} else {
				setError('email', { type: 'custom', message: (e as AxiosError).message });
				setError('password', { type: 'custom', message: (e as AxiosError).message });
			}
		}
	});

	const getEmailInputProps: TextFieldProps = {
		...register('email', {
			required: FIELD_REQUIRED,
			maxLength: EMAIL_MAX_LENGTH(30),
			pattern: {
				value: REGULAR_EMAIL,
				message: EMAIL_PATTERN_MESSAGE,
			},
		}),
		label: 'E-mail or phone number',
		placeholder: 'youmail@gmail.com',
		subText: errors.email?.message ? errors.email.message : '',
		color: errors.email?.message ? 'danger' : 'primary',
	};

	const getPasswordInputProps: TextFieldProps = {
		...register('password', {
			required: FIELD_REQUIRED,
			minLength: PASSWORD_MIN_LENGTH(8),
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
