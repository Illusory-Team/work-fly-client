import { User, UserRes, UserResponse } from '../types';

export const userMapper = (data: UserRes): User => {
	const [firstName, lastName] = data.fullName.split(' ');

	return {
		...data,
		firstName,
		lastName,
		position: 'member',
		isOwner: false,
	};
};

export const userResponseMapper = (data: UserResponse): User => {
	const user = userMapper(data.user);

	return user;
};
