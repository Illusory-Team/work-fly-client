import { TextFieldProps } from '@/components/ui/inputs/TextField/TextField.types';
import authService from '@/services/auth';
import { EMAIL_PATTERN_MESSAGE, FIELD_REQUIRED, PASSWORD_PATTERN_MESSAGE } from '@/utils/constants/auth/auth.const';
import { REGULAR_EMAIL, REGULAR_PASSWORD } from '@/utils/constants/regular';
import { getEmailMaxLength, getPasswordMinLength } from '@/utils/helpers/auth/auth';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { IErrorAuthResponse, IFormLogin } from 'shared/types/auth';

export const useLoginHookForm = () => {
	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLogin>({ mode: 'onBlur' });

	const submitHandler = handleSubmit(async (data: IFormLogin) => {
		try {
			await authService.login(data);
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
