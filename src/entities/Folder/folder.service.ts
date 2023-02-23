import { fakeApi } from '@/shared/api';
import { IFolder } from '@/shared/types';

export const FolderService = {
	getCompanyFolder() {
		return 1;
	},
	async getOne(id: string) {
		return await fakeApi<IFolder>(`folders/${id}`);
	},
};
