import { AxiosInstance } from 'axios';

import { fakeApi } from '../instance';
import { IFolder } from '../types';

class FolderService {
	api: AxiosInstance;
	constructor() {
		this.api = fakeApi;
	}

	async getOne(id: string) {
		return await fakeApi<IFolder>(`folders/${id}`);
	}
}

export const folderService = new FolderService();
