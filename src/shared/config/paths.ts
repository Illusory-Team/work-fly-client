export const LOGIN_PATH = '/auth/login';
export const REGISTER_PATH = '/auth/register';

export const isAuthPath = (asPath: string | undefined) => asPath === LOGIN_PATH || asPath === REGISTER_PATH;
