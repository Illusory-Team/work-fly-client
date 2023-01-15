import { IUser } from './IUser.types';

interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface ILoginResponse {
	user: IUser;
	tokens: ITokens;
}
