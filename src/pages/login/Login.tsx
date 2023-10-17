'use client';

import { Link } from 'react-router-dom';

import { LoginForm, withAuthCheck } from '@/features/Auth';

import { REGISTER_PATH } from '@/shared/config/paths';

import { AuthLayout } from '@/widgets/AuthLayout';

const LoginPage = () => {
	return (
		<>
			<AuthLayout
				form={<LoginForm className="mt-20" />}
				src="/images/illustrations/login-illustration.png"
				href="registration"
				subTitle={
					<>
						Have no account?{' '}
						<Link to={REGISTER_PATH} className="font-bold">
							Registration
						</Link>
					</>
				}
			/>
		</>
	);
};

export default withAuthCheck(LoginPage);
