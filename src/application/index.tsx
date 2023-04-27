import { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import 'simplebar-react/dist/simplebar.min.css';

import { setupInterceptors } from '@/app/config/setupInterceptors';

import { AppProvider } from './providers';
import { wrapper } from './store/store';

export const Root = ({ Component, ...params }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(params);

	setupInterceptors(store);

	return (
		<AppProvider>
			<Provider store={store}>
				<Component {...props.pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</Provider>
		</AppProvider>
	);
};
