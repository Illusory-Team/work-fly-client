import { AuthLayout } from '@/components/layouts/AuthLayout';
import { Container } from '@/components/layouts/Container';
import { LoginForm } from '@/components/ui/forms/LoginForm';
import { RegistrationForm } from '@/components/ui/forms/RegistrationForm';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const Auth: FC = () => {
	const { query } = useRouter();
	const isLogin = query.auth_type === 'login';

	return (
		<AuthLayout>
			<Container className="h-screen pt-20 flex px-8">
				<div className="h-full flex-1 flex-col-center-start">
					<h1 className="h1 mt-24 w-3/4">
						Connect your team
						<br /> with WorkFly
					</h1>
					<p className="subhead mt-12 text-left w-3/4">
						{isLogin ? 'Have no account' : 'Already have an account'}?{' '}
						<Link href={isLogin ? 'registration' : 'login'} className="font-bold">
							{isLogin ? 'Login' : 'Registration'}
						</Link>
					</p>
					<Image
						draggable={false}
						className="mt-14 "
						src={isLogin ? '/login-illustration.png' : '/registration-illustration.png'}
						width={768}
						height={639}
						alt=""
						priority
					/>
				</div>
				<div className="h-full flex-1 flex-col-center-start">
					{isLogin ? <LoginForm className="mt-24" /> : <RegistrationForm className="mt-24" />}
				</div>
			</Container>
		</AuthLayout>
	);
};
