import { AxiosInstance } from 'axios';

import { fakeApi } from '../instance';
import { Folder } from '../types';

class FolderService {
	api: AxiosInstance;
	constructor() {
		this.api = fakeApi;
	}

	async getOne(id: string) {
		return await fakeApi<Folder>(`folders/${id}`);
	}
}

export const folderService = new FolderService();
