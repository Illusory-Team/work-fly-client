type PositionValueType = 'owner' | 'member' | 'manager';

export type UserPositionType = {
	id: string;
	value: PositionValueType;
};

export interface IUser {
	id: Nullable<string>;
	email: string;
	firstName: string;
	lastName: string;
	phone: Nullable<number>;
	birthday: Nullable<string>;
	address: Nullable<string>;
	description: Nullable<string>;
	position?: UserPositionType;
	avatar: string;
	isOwner: boolean;
	csrfToken: string;
}

export interface UserResponse {
	csrfToken: string;
	user: IUser;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserRegistration {
	email: string;
	phone: string;
}
