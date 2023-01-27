import { FC } from 'react';

import { AuthLayout } from '@/layouts/AuthLayout';

import { AuthTemplate } from '@/widgets/AuthTemplate';

import { RegistrationForm } from '@/features/Auth';

import { Meta } from '@/shared/ui/Meta';

const registration: FC = () => {
	return (
		<AuthLayout>
			<Meta title="Work-Fly | Registration" />
			<AuthTemplate isLoginPage={false} form={<RegistrationForm className="mt-16" />} />;
		</AuthLayout>
	);
};

export default registration;
