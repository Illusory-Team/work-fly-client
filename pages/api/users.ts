import type { NextApiRequest, NextApiResponse } from 'next';

import { IUser } from '@/entities/User';

import { usersMock } from '../../mock/user';

export default function handler(req: NextApiRequest, res: NextApiResponse<IUser[]>) {
	res.status(200).json(usersMock);
}
