'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { $profileApi } from '@/entities/User';

import { AuthLoginRequest, ErrorResponse, authService } from '@/shared/api';

export const useLoginForm = () => {
	const { setError, control, handleSubmit } = useForm<AuthLoginRequest>({ mode: 'onBlur' });
	const router = useRouter();

	const { mutateAsync } = useMutation('login-user', (data: AuthLoginRequest) => authService.login(data), {
		onSuccess(user) {
			if (user) {
				$profileApi.setProfile(user);
			}
		},
	});

	const submitHandler = handleSubmit(async (data: AuthLoginRequest) => {
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
