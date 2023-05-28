import { Metadata, NextPage } from 'next';

import { RegistrationView } from '@/views/register';

export const metadata: Metadata = {
	title: 'Work Fly | Registration',
};

const Registration: NextPage = () => {
	return <RegistrationView />;
};

export default Registration;
