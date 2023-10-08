import { createBrowserRouter } from 'react-router-dom';

import { NotFound } from '@/pages/NotFound';
import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { RegistrationPage } from '@/pages/register';

export const routes = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegistrationPage />,
	},
	{
		path: '/',
		element: <HomePage />,
		errorElement: <>error</>,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
