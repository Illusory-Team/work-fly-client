import type { NextApiRequest, NextApiResponse } from 'next';

import { Folder } from '@/shared/api';

import { folderMock } from '../../mock/folder';

export default function handler(req: NextApiRequest, res: NextApiResponse<Folder[]>) {
	res.status(200).json(folderMock);
}
