import { FC } from 'react';

import { AuthLayout } from '@/layouts/AuthLayout';

import { AuthTemplate } from '@/widgets/AuthTemplate';

import { LoginForm } from '@/features/Auth';

import { Meta } from '@/shared/ui/Meta';

const Login: FC = () => {
	return (
		<AuthLayout>
			<Meta title="Work-Fly | Login" />
			<AuthTemplate isLoginPage={true} form={<LoginForm className="mt-16" />} />;
		</AuthLayout>
	);
};

export default Login;
