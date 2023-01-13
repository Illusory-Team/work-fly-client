import { LoginForm } from '@/components/forms/LoginForm';
import { Auth } from '@/components/screens/Auth/Auth';
import { FC } from 'react';

const Login: FC = () => {
	return <Auth isLoginPage={true} form={<LoginForm className="mt-16" />} />;
};

export default Login;
