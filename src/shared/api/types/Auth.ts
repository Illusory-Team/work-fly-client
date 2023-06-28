import { UserResponseWithPosition } from './User';

export interface AuthRegistrationRequest {
	email: string;
	phone: string;
}

export interface AuthLoginRequest {
	email: string;
	password: string;
}

export interface AuthResponse {
	user: UserResponseWithPosition;
	csrfToken: string;
}
