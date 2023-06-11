'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from '@/entities/User';

import { AuthService } from '../../services';
import { IErrorAuthResponse, IFormLogin } from '../../types';

export const useLoginForm = () => {
	const { setError, control, handleSubmit } = useForm<IFormLogin>({ mode: 'onBlur' });
	const router = useRouter();

	const dispatch = useDispatch();

	const { mutateAsync } = useMutation('login-user', (data: IFormLogin) => AuthService.login(data), {
		onSuccess(user) {
			if (user) {
				dispatch(setCurrentUser(user));
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

	return {
		control,
		submitHandler,
	};
};
