import { NextRequest, NextResponse } from 'next/server';

import { LOGIN_PATH } from '@/shared/config/paths';

export async function GET(request: NextRequest) {
	console.log(request.cookies.getAll());
	const response = await fetch(`http://localhost:3000/api/v2/auth/refresh`, {
		// withCredentials: true,
		credentials: 'include',
	});

	// console.log(response);

	if (response.status === 401) {
		NextResponse.rewrite(new URL(LOGIN_PATH, request.url));
	}
}
