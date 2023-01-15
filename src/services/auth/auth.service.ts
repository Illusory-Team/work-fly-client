import { AxiosResponse } from 'axios';
import { $api } from 'module/libs/axios';
import { IFormLogin } from 'shared/types/auth/IFormLogin.types';
import { ILoginResponse } from 'shared/types/auth/ILoginResponse.types';

class AuthService {
	async login(loginData: IFormLogin): Promise<AxiosResponse> {
		const response = await $api.post<ILoginResponse>('auth/login', loginData);
		return response;
	}
}

export default new AuthService();
