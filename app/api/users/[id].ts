import type { NextApiRequest, NextApiResponse } from 'next';

import { UserRes } from '@/shared/api';

import { usersMock } from '../../../mock/user';

export default function handler(req: NextApiRequest, res: NextApiResponse<UserRes>) {
	const id = req.query.id as string;
	const numId = Number(id) - 1;

	res.status(200).json(usersMock[numId]);
}
