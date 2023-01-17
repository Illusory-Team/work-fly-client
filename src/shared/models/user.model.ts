export interface user {
	id: number | string;
	email: string;
	fullName: string;
	phone: number;
	birthday: nullable<string>;
	address: nullable<string>;
	description: nullable<string>;
}
