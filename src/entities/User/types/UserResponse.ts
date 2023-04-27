import { IUser } from '@/shared/types';

type UserBodyType = Omit<IUser, 'firstName' | 'lastName'> & { fullName: string };

export interface UserResponse {
	csrfToken: string;
	user: UserBodyType;
}
