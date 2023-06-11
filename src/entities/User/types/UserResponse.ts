import { IUser } from '@/shared/types';

// FIX ME - переделать
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type UserBodyType = Omit<IUser, 'firstName' | 'lastName'> & { fullName: string };

export interface UserResponse {
	csrfToken: string;
	user: IUser;
}
