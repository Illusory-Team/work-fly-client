export interface IUser {
	id: Nullable<string>;
	email: string;
	firstName: string;
	lastName: string;
	phone: Nullable<number>;
	birthday: Nullable<string>;
	address: Nullable<string>;
	description: Nullable<string>;
	position?: string;
	avatar: Nullable<string>;
}
