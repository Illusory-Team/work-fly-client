import axios from 'axios';

export const BASE_URL = process.env.API_URL;
const FAKE_URL = process.env.FAKE_API_URL;

export const api = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

export const fakeApi = axios.create({
	baseURL: FAKE_URL,
	withCredentials: false,
});
