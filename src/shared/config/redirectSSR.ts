import { ServerResponse } from 'http';

export const redirectSSR = (path: string, res?: ServerResponse) => {
	res?.writeHead(302, {
		Location: path,
	});

	res?.end();
};
