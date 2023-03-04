import { IUser } from '@/shared/types';

import { ITokens } from './ITokens';

export interface IErrorAuthResponse {
	message: string;
	statusCode: number;
}

export interface IFormLogin {
	email: string;
	password: string;
}

export interface IFormRegistration {
	email: string;
	phone: string;
}

export interface ILoginResponse {
	token: ITokens;
	user: IUser;
}
