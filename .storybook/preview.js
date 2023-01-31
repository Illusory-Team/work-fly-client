import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';

// import '@/styles/index.scss'
import '!style-loader!css-loader!postcss-loader!sass-loader!../src/application/styles/index.scss';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	nextRouter: {
		Provider: RouterContext.Provider,
	},
};
