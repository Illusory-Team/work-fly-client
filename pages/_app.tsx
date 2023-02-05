import type { AppProps } from 'next/app';

import { Root } from '@/app/index';
import '@/app/styles/index.scss';

export default function App({ Component, ...params }: AppProps) {
	return <Root Component={Component} {...params} />;
}
