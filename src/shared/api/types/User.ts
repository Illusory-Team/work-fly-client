import { UserPosition } from './Position';

export interface UserResponse {
	id: string;
	email: string;
	fullName: string;
	phone: number;
	birthday: string | null;
	address: string | null;
	description: string | null;
	avatar: string | null;
	position: UserPosition;
}

export interface UserResponseWithPosition extends UserResponse {
	position: UserPosition;
}

export interface User extends UserResponse {
	position: UserPosition;
	firstName: string;
	lastName: string;
	isOwner: boolean;
}

export interface UserStore {
	user: Nullable<User>;
	isLoading: boolean;
	isAuthenticated: boolean;
	error: null | string;
}
