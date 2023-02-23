import { IFolder } from '@/shared/types';

import { usersMock } from './user';

export const folderMock: IFolder[] = [
	{
		id: '1',
		color: 'red',
		folderName: 'Folder Name',
		icon: { name: 'folder_plant' },
		members: usersMock,
		owner: 'Marlen Karimov',
		tasks: 12,
	},
	{
		id: '2',
		color: 'green',
		folderName: 'Folder Name',
		icon: { name: 'folder_apps' },
		members: usersMock,
		owner: 'Dima Kavoon',
		tasks: 12,
	},
];
