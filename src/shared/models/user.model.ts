export interface User {
	id: number | string;
	email: string;
	fullName: string;
	phone: number;
	birthday: Nullable<string>;
	address: Nullable<string>;
	description: Nullable<string>;
}