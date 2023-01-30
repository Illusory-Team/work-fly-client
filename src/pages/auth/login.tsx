import Link from 'next/link';
import { FC } from 'react';

import { LoginForm } from '@/features/Auth';

import { Meta } from '@/shared/ui/Meta';

import { AuthLayout } from '@/widgets/AuthLayout';

const Login: FC = () => {
	return (
		<>
			<Meta title="Work Fly | Login" />
			<AuthLayout
				form={<LoginForm className="mt-20" />}
				src="/login-illustration.png"
				href="registration"
				subTitle={
					<>
						Have no account?{' '}
						<Link href="registration" className="font-bold">
							Registration
						</Link>
					</>
				}
			/>
		</>
	);
};

export default Login;
