import { Container } from '@/components/layouts/Container';
import { Button } from '@/components/ui/Button';
import { MobileAuthCarousel } from '@/components/ui/carousel/MobileAuthCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const AuthMobile: FC = () => {
	return (
		<Container className="px-6">
			<Image className="mt-9" src="/logo2.svg" width={56} height={33} alt="logo" />
			<MobileAuthCarousel />
			<Button className="display-b mx-auto mt-12">Registration</Button>
			<Button className="display-b mx-auto mt-3" variant="outlined">
				Sign in
			</Button>
			<p className="text-center mt-5">
				You have a code?{' '}
				<Link className="font-bold" href="/code-join">
					Join your team
				</Link>
			</p>
		</Container>
	);
};
