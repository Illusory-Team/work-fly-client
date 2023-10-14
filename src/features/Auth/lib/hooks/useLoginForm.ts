import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { useUserStore } from '@/entities/User';

import { AuthLoginRequest, ErrorResponse, authService } from '@/shared/api';

export const useLoginForm = () => {
	const { setError, control, handleSubmit } = useForm<AuthLoginRequest>({ mode: 'onBlur', reValidateMode: 'onSubmit' });
	const navigate = useNavigate();
	const setUser = useUserStore(state => state.setUser);

	const { mutateAsync, isLoading, error } = useMutation(
		'login-user',
		(data: AuthLoginRequest) => authService.login(data),
		{
			onSuccess(user) {
				if (user) {
					setUser(user);
				}
			},
		},
	);

	const submitHandler = handleSubmit(async (data: AuthLoginRequest) => {
		try {
			const response = await mutateAsync(data);

			if (response) {
				await navigate('/');
			}
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
		isLoading,
		error,
	};
};
