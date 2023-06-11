import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Button, Container } from '@/shared/ui';

interface HeaderProps {
	href: string;
}

export const Header: FC<HeaderProps> = ({ href }) => {
	return (
		<header className="absolute w-full">
			<Container className="flex-center-between h-20 px-8 pt-6 pb-4">
				<Image src="/images/logo.svg" height={42} width={72} alt="logo" priority />
				<Link href={href}>
					<Button variant="outlined">{href}</Button>
				</Link>
			</Container>
		</header>
	);
};
