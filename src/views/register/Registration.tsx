import Link from 'next/link';
import React from 'react';

import { LoginForm } from '@/features/Auth';

import { LOGIN_PATH } from '@/shared/config/paths';

import { AuthLayout } from '@/widgets/AuthLayout';

export const RegistrationView = () => {
	return (
		<>
			<AuthLayout
				form={<LoginForm className="mt-20" />}
				src="/images/illustrations/registration-illustration.png"
				href="login"
				subTitle={
					<>
						Already have an account?
						<Link href={LOGIN_PATH} className="font-bold">
							Login
						</Link>
					</>
				}
			/>
		</>
	);
};
