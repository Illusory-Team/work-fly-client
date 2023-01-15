import { AxiosResponse } from 'axios';
import api from 'api/axios';
import { IFormLogin, ILoginResponse } from 'shared/types/auth';

const AuthService = {
	async login(loginData: IFormLogin): Promise<AxiosResponse> {
		return await api.post<ILoginResponse>('auth/login', loginData);
	},
};

export default AuthService;
