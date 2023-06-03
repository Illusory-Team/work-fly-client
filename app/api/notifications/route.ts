import { NextResponse } from 'next/server';

import { notificationMock } from '../../../mock/notification';

export function GET() {
	return NextResponse.json(notificationMock);
}
