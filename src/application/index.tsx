'use client';

import { FC } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AppProvider } from './providers';

export const Root: FC<PropsWithChildren> = ({ children }) => {
	return (
		<AppProvider>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</AppProvider>
	);
};
