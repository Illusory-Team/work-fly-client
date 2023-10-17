'use client';

import { Link } from 'react-router-dom';

import { LoginForm } from '@/features/Auth';

import { LOGIN_PATH } from '@/shared/config/paths';

import { AuthLayout } from '@/widgets/AuthLayout';

const RegistrationPage = () => {
	return (
		<>
			<AuthLayout
				form={<LoginForm className="mt-20" />}
				src="/images/illustrations/registration-illustration.png"
				href="login"
				subTitle={
					<>
						Already have an account?
						<Link to={LOGIN_PATH} className="font-bold">
							Login
						</Link>
					</>
				}
			/>
		</>
	);
};

export default RegistrationPage;
