import type { AppProps } from 'next/app';

import '@/styles/index.scss';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);

	return (
		<Provider store={store}>
			<Component {...props.pageProps} />
		</Provider>
	);
}
