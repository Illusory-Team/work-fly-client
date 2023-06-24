import { UserResWithPosition } from './User';

export interface AuthRegistrationReq {
	email: string;
	phone: string;
}

export interface AuthLoginReq {
	email: string;
	password: string;
}

export interface AuthRes {
	user: UserResWithPosition;
	csrfToken: string;
}
