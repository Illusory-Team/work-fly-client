import { IUser } from '@/entities/User';

export const usersMock: IUser[] = [
	{
		id: 1,
		email: 'zhook@gmail.com',
		fullName: 'kavoon kavoonovich',
		phone: 984545445545,
		birthday: null,
		address: null,
		description: '',
		position: 'Captain',
		avatar: '/anonym.png',
	},
	{
		id: 2,
		email: 'zhookov@gmail.com',
		fullName: 'kavoon kavoonovich 12',
		phone: 984545445545,
		birthday: null,
		address: null,
		description: 'I Matros',
		position: 'Matros',
		avatar: '/anonym.png',
	},
];
