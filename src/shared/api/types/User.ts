import { PositionValueType, UserPosition } from './Position';

export interface UserResponse {
	id: string;
	email: string;
	fullName: string;
	phone: number;
	birthday: string | null;
	address: string | null;
	description: string | null;
	avatar: string | null;
}

export interface UserResponseWithPosition extends UserResponse {
	position: UserPosition;
}

export interface User extends UserResponse {
	position: PositionValueType;
	firstName: string;
	lastName: string;
	isOwner: boolean;
}
