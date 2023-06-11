import { Metadata, NextPage } from 'next';

import { LoginView } from '@/views/login/Login';

export const metadata: Metadata = {
	title: 'Work Fly | Login',
};

const Login: NextPage = () => {
	return <LoginView />;
};

export default Login;