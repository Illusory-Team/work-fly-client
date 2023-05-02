import { getCookies } from 'cookies-next';
import type { AppProps } from 'next/app';

import { Root } from '@/app/index';
import { wrapper } from '@/app/store/store';
import '@/app/styles/index.scss';

import { setCurrentUser } from '@/entities/User/model/user.slice';

import { AuthService } from '@/features/Auth/services';

import { LOGIN_PATH, isAuthPath } from '@/shared/config/paths';
import { redirectSSR } from '@/shared/config/redirectSSR';
import { logger } from '@/shared/helpers/logger';

export default function App({ Component, ...params }: AppProps) {
	return <Root Component={Component} {...params} />;
}

App.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
	try {
		const { req, res, asPath } = ctx;

		if (!!req) {
			const cookies = getCookies({ req, res });
			const isNotAuthPaths = !isAuthPath(asPath);

			if (cookies && !cookies.refreshToken) {
				if (isNotAuthPaths) {
					redirectSSR(LOGIN_PATH, res);
				}
			} else {
				const response = await AuthService.refreshToken(ctx);

				if (response) {
					store.dispatch(setCurrentUser(response.data));
				}

				const isSignedIn = !!store.getState().userReducer.user;

				if (isSignedIn && isAuthPath(asPath)) {
					redirectSSR('/', res);
				}
			}
		}
	} catch (error: unknown) {
		logger({ type: 'error', message: (error as Error).message });
	}

	return {
		pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
	};
});
