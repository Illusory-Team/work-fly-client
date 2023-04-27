import { IUser } from '@/shared/types';

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

export interface UserResponse {
	csrfToken: string;
	user: Omit<IUser, 'firstName' | 'lastName'> & { fullName: string };
}
