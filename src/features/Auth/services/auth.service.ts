import { AxiosResponse } from 'axios';
import { api } from '@/shared/api';
import { IFormLogin, ILoginResponse } from '../types';

export const AuthService = {
	async login(loginData: IFormLogin): Promise<AxiosResponse> {
		return await api.post<ILoginResponse>('auth/login', loginData);
	},
};
