import { User } from 'shared/models/user.model';

interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface ILoginResponse {
	user: User;
	tokens: ITokens;
}

export interface IErrorAuthResponse {
	message: string;
	statusCode: number;
}

export interface IFormLogin {
	email: string;
	password: string;
}
