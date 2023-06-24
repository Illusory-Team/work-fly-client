import { PositionValueType, UserPosition } from './Position';

export interface UserRes {
	id: string;
	email: string;
	fullName: string;
	phone: number | null;
	birthday: string | null;
	address: string | null;
	description: string | null;
	avatar: string | null;
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
	isOwner: boolean;
}
