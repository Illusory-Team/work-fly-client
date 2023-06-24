'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { $profileApi } from '@/entities/User';

import { AuthLoginReq, ErrorResponse, authService } from '@/shared/api';

export const useLoginForm = () => {
	const { setError, control, handleSubmit } = useForm<AuthLoginReq>({ mode: 'onBlur' });
	const router = useRouter();

	const { mutateAsync } = useMutation('login-user', (data: AuthLoginReq) => authService.login(data), {
		onSuccess(user) {
			if (user) {
				$profileApi.setProfile(user);
			}
		},
	});

	const submitHandler = handleSubmit(async (data: AuthLoginReq) => {
		try {
			await mutateAsync(data);
			await router.push('/');
		} catch (error) {
			const errorMessage = (error as AxiosError<ErrorResponse>).response?.data.message;
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
