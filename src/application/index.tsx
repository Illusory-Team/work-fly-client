'use client';

import { FC } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

// import { setupInterceptors } from '@/app/config/setupInterceptors';
import { AppProvider } from './providers';
import { store } from './store/store';

export const Root: FC<PropsWithChildren> = ({ children }) => {
	// setupInterceptors(store);

	return (
		<AppProvider>
			<Provider store={store}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</Provider>
		</AppProvider>
	);
};
