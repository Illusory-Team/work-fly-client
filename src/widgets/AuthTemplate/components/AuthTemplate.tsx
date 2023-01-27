import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

import { Container } from '@/layouts/Container';

interface AuthProps {
	isLoginPage: boolean;
	form: ReactNode;
}

export const AuthTemplate: FC<AuthProps> = ({ isLoginPage, form }) => {
	return (
		<Container className="h-screen pt-20 flex px-8">
			<div className="h-full flex-1 flex-col-center-start">
				<h1 className="h1 mt-24 w-3/4">
					Connect your team
					<br /> with WorkFly
				</h1>
				<p className="subhead mt-12 text-left w-3/4">
					{isLoginPage ? 'Have no account' : 'Already have an account'}?{' '}
					<Link href={isLoginPage ? 'registration' : 'login'} className="font-bold">
						{isLoginPage ? 'Login' : 'Registration'}
					</Link>
				</p>
				<Image
					draggable={false}
					className="mt-14 "
					src={isLoginPage ? '/login-illustration.png' : '/registration-illustration.png'}
					width={768}
					height={639}
					alt=""
					priority
				/>
			</div>
			<div className="h-full flex-1 flex-col-center-start">{form}</div>
		</Container>
	);
};
