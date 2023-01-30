import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

import { wrapper } from '@/app/store/store';
import '@/app/styles/index.scss';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Component {...props.pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</Provider>
		</QueryClientProvider>
	);
}
