import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/layouts/Container';

interface HeaderProps {
	href: string;
}

export const Header: FC<HeaderProps> = ({ href }) => {
	return (
		<header className="absolute w-full">
			<Container className="flex-center-between h-20 px-8 pt-6 pb-4">
				<Image src="/logo.svg" height={42} width={72} alt="logo" priority />
				<Link href={href}>
					<Button size="m" variant="outlined">
						{href}
					</Button>
				</Link>
			</Container>
		</header>
	);
};
