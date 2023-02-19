export interface IUser {
	id: Nullable<number | string>;
	email: string;
	fullName: string;
	phone: Nullable<number>;
	birthday: Nullable<string>;
	address: Nullable<string>;
	description: Nullable<string>;
	position?: string;
	avatar: string;
}
