import { Auth } from '@/components/screens/Auth/Auth';
import { FC } from 'react';

const registration: FC = () => {
	return <Auth isLoginPage={false} />;
};

export default registration;
