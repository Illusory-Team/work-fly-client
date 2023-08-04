import { EffectorNext } from '@effector/next';
import { attachLogger } from 'effector-logger';
import { Metadata } from 'next';
import 'simplebar-react/dist/simplebar.min.css';

import { Root } from '@/app/index';
import '@/app/styles/index.scss';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Welcome to Next.js',
};

attachLogger();

export default async function RootLayout({ children }: PropsWithChildren) {
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
