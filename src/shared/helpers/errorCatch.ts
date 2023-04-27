import { AxiosError } from 'axios';

export const errorCatch = (error: AxiosError<{ message: string }>): string => {
	return error && error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message;
};
