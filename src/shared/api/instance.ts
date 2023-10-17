import axios from 'axios';

import { errorResponseInterceptor, responseInterceptor } from './interceptors/auth-interceptor';

export const BASE_URL = '/api';
const FAKE_URL = '/fake';

export const api = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	timeout: 5000,
});

api.interceptors.response.use(responseInterceptor, errorResponseInterceptor);

export const fakeApi = axios.create({
	baseURL: FAKE_URL,
	withCredentials: false,
});
