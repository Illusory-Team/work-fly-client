import Link from 'next/link';

import { LoginForm } from '@/features/Auth';

import { Meta } from '@/shared/ui/Meta';

import { AuthLayout } from '@/widgets/AuthLayout';

export const LoginView = () => {
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
