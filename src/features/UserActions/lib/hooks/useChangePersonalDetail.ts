import { useForm } from 'react-hook-form';

import { IPersonalDetailData } from '../types';

export const useChangePersonalDetail = () => {
	const { handleSubmit, control, register } = useForm<IPersonalDetailData>();

	const submitHandler = handleSubmit((data: IPersonalDetailData) => {
		// eslint-disable-next-line no-console
		console.log(data);
	});

	return {
		submitHandler,
		register,
		control,
	};
};
