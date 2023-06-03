import Link from 'next/link';

import { LoginForm } from '@/features/Auth';

import { REGISTER_PATH } from '@/shared/config/paths';

import { AuthLayout } from '@/widgets/AuthLayout';

export const LoginView = () => {
	return (
		<>
			<AuthLayout
				form={<LoginForm className="mt-20" />}
				src="/images/illustrations/login-illustration.png"
				href="registration"
				subTitle={
					<>
						Have no account?{' '}
						<Link href={REGISTER_PATH} className="font-bold">
							Registration
						</Link>
					</>
				}
			/>
		</>
	);
};
