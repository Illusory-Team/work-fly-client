import { RegistrationForm } from '@/components/forms/RegistrationForm';
import { Auth } from '@/components/screens/Auth/Auth';
import { FC } from 'react';

const registration: FC = () => {
	return <Auth isLoginPage={false} form={<RegistrationForm className="mt-16" />} />;
};

export default registration;
