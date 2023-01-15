export interface IUser {
	id: number | string;
	email: string;
	fullName: string;
	phone: number;
	birthday: string | null;
	address: string | null;
	description: string | null;
}
