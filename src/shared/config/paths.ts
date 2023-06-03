export const LOGIN_PATH = '/login';
export const REGISTER_PATH = '/register';

export const isAuthPath = (asPath: string | undefined) => asPath === LOGIN_PATH || asPath === REGISTER_PATH;
