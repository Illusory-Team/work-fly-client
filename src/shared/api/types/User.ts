import { PositionValueType, UserPosition } from './Position';

export interface UserRes {
	id: string;
	email: string;
	fullName: string;
	phone: number;
	birthday: string;
	address: string;
	description: string;
	avatar: string;
}

export interface UserResWithPosition extends UserRes {
	position: UserPosition;
}

export interface UserResponse {
	user: UserRes;
	csrfToken: string;
}

export interface User extends UserRes {
	position: PositionValueType;
	firstName: string;
	lastName: string;
}
