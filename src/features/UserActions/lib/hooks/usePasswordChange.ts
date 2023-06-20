import { useForm } from 'react-hook-form';

import { IPasswordChangeData } from '../types';

export const usePasswordChange = () => {
	const { handleSubmit, register, control } = useForm<IPasswordChangeData>();

	const submitHandler = handleSubmit((data: IPasswordChangeData) => {
		// eslint-disable-next-line no-console
		console.log(data);
	});

	return {
		control,
		register,
		submitHandler,
	};
};
