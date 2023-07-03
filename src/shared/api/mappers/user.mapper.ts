import { AuthResponse, User, UserResponse } from '../types';

export const userMapper = (data: UserResponse): User => {
	const [firstName, lastName] = data.fullName.split(' ');

	return {
		...data,
		firstName,
		lastName,
		position: 'member',
		isOwner: false,
	};
};

export const userResponseMapper = (data: AuthResponse): User => {
	const user = userMapper(data.user);

	return user;
};
