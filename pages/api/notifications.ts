import type { NextApiRequest, NextApiResponse } from 'next';

import { INotification } from '@/shared/types';

import { notificationMock } from '../../mock/notification';

export default function handler(req: NextApiRequest, res: NextApiResponse<INotification[]>) {
	res.status(200).json(notificationMock);
}
