import { fakeApi } from '@/shared/api';

import { IFolder } from './types/IFolder';

export const FolderService = {
	getCompanyFolder() {
		return 1;
	},
	async getOne(id: string) {
		return await fakeApi<IFolder>(`folders/${id}`);
	},
};
