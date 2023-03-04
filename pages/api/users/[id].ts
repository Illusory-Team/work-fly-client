import type { NextApiRequest, NextApiResponse } from 'next';

import { IUser } from '@/shared/types';

import { usersMock } from '../../../mock/user';

export default function handler(req: NextApiRequest, res: NextApiResponse<IUser>) {
	const id = req.query.id as string;
	const numId = Number(id) - 1;

	res.status(200).json(usersMock[numId]);
}
