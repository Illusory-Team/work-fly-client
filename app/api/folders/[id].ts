import type { NextApiRequest, NextApiResponse } from 'next';

import { IFolder } from '@/shared/types';

import { folderMock } from '../../../mock/folder';

export default function handler(req: NextApiRequest, res: NextApiResponse<IFolder>) {
	const id = req.query.id as string;
	const numId = Number(id) - 1;

	res.status(200).json(folderMock[numId]);
}
