import { EffectorNext } from '@effector/next';
import { attachLogger } from 'effector-logger';
import { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import 'simplebar-react/dist/simplebar.min.css';

import { Root } from '@/app/index';
import '@/app/styles/index.scss';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Welcome to Next.js',
};

// это пока временно, будем ждать когда пофиксять баг со стороны next или будем делать аутентификацию на  клиенте
// async function getUserProfile() {
// 	try {
// 		const cookie = cookies();
// 		console.log(cookie.getAll());
//
// 		const response = await fetch(BASE_URL + 'auth/refresh', {
// 			cache: 'no-cache',
// 			credentials: 'include',
// 		});
//
// 		// console.log(getCookies({ res: response }));
//
// 		console.log(response.headers);
// 		const responseCookies = response.headers.get('set-cookie')?.split(';');
// 		console.log(responseCookies);
// 		if (responseCookies) {
// 			responseCookies.forEach((cookieStr: string) => {
// 				const [name, value] = cookieStr.split('=');
// 				// const maxAge = cookieStr.split(';')[1].split('=')[1];
// 				console.log(name, value);
// 				// console.log(name, value);
// 				//
// 				if (name === 'refreshToken' || name === 'accessToken') {
// 					// setCookie(name, value, { res, req, httpOnly: true, maxAge: Number(maxAge) }
// 					cookie.set(name, value);
// 				}
// 			});
// 		}
// 		if (response.ok) {
// 			// cookie.set('');
// 			return response.json();
// 		}
//
// 		return response;
// 	} catch (e) {
// 		console.log(e);
// 		return e.status;
// 	}
// }

attachLogger();

export default async function RootLayout({ children }: PropsWithChildren) {
	// Пока нам это не надо

	// const headersList = headers();
	// const headerPathname = headersList.get('x-pathname') || '';
	// const cookie = cookies();
	// const refreshToken = cookie.get('refreshToken');

	// if (headerPathname !== '/login' && headerPathname !== '/register') {
	// 	if (!refreshToken) {
	// 		redirect('/login');
	// 	}
	// }

	return (
		<html suppressHydrationWarning lang="en">
			<body suppressHydrationWarning>
				<EffectorNext>
					<Root>{children}</Root>
				</EffectorNext>
				<div id="portal"></div>
			</body>
		</html>
	);
}
