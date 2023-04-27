import { IUser } from '@/shared/types';

export interface UserResponse {
	csrfToken: string;
	user: Omit<IUser, 'firstName' | 'lastName'> & { fullName: string };
}
