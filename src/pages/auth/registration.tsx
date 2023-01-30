import Link from 'next/link';
import { FC } from 'react';

import { LoginForm } from '@/features/Auth';

import { Meta } from '@/shared/ui/Meta';

import { AuthLayout } from '@/widgets/AuthLayout';

const Registration: FC = () => {
	return (
		<>
			<Meta title="Work Fly | Registration" />
			<AuthLayout
				form={<LoginForm className="mt-20" />}
				src="/registration-illustration.png"
				href="login"
				subTitle={
					<>
						Already have an account?{' '}
						<Link href="login" className="font-bold">
							Login
						</Link>
					</>
				}
			/>
		</>
	);
};

export default Registration;
