import { FC } from 'react';
import { RouterProvider } from 'react-router';
import 'simplebar-react/dist/simplebar.min.css';

import { routes } from '@/app/routing/routes';

import { AppProvider } from './providers';
import './styles/index.scss';

export const App: FC = () => {
	return (
		<AppProvider>
			<RouterProvider router={routes} />
		</AppProvider>
	);
};
