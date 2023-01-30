import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';
const FAKE_URL = 'https://6358ff89ff3d7bddb99618ca.mockapi.io/';

export const api = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

export const fakeApi = axios.create({
	baseURL: FAKE_URL,
	withCredentials: false,
});
