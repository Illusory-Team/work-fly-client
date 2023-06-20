'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from '@/entities/User';

import { IErrorResponse, IUserLogin, authService } from '@/shared/api';

export const useLoginForm = () => {
	const { setError, control, handleSubmit } = useForm<IUserLogin>({ mode: 'onBlur' });
	const router = useRouter();

	const dispatch = useDispatch();

	const { mutateAsync } = useMutation('login-user', (data: IUserLogin) => authService.login(data), {
		onSuccess(user) {
			if (user) {
				dispatch(setCurrentUser(user));
			}
		},
	});

	const submitHandler = handleSubmit(async (data: IUserLogin) => {
		try {
			await mutateAsync(data);
			await router.push('/');
		} catch (error) {
			const errorMessage = (error as AxiosError<IErrorResponse>).response?.data.message;
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
