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
	avatar: Nullable<string>;
	isOwner: boolean;
	csrfToken: string;
}
