import { NextResponse } from 'next/server';

import { usersMock } from '../../mock/user';

export async function GET() {
	return NextResponse.json(usersMock);
}
