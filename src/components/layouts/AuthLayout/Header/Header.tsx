import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Container } from '../../Container';

export const Header: FC = () => {
	const { query } = useRouter();
	const isLogin = query.auth_type === 'login';

	return (
		<header className="absolute w-full">
			<Container className="flex-center-between h-20 px-8 pt-6 pb-4">
				<Image src="/logo.svg" height={42} width={72} alt="logo" priority />
				<div className="flex-center-between">
					<Link href={isLogin ? 'registration' : 'login'}>
						<Button size="m" variant="outlined">
							{isLogin ? 'Registration' : 'Sign in'}
						</Button>
					</Link>
				</div>
			</Container>
		</header>
	);
};
