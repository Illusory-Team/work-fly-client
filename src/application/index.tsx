'use client';

import { FC } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

// import { setupInterceptors } from '@/app/config/setupInterceptors';
import { AppProvider } from './providers';

export const Root: FC<PropsWithChildren> = ({ children }) => {
	// setupInterceptors(store);

	return (
		<AppProvider>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</AppProvider>
	);
};
