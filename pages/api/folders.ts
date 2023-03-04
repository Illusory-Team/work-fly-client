import type { NextApiRequest, NextApiResponse } from 'next';

import { IFolder } from '@/shared/types';

import { folderMock } from '../../mock/folder';

export default function handler(req: NextApiRequest, res: NextApiResponse<IFolder[]>) {
	res.status(200).json(folderMock);
}
