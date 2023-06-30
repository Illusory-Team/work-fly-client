import { Folder } from '@/shared/api';

import { usersMock } from './user';

export const folderMock: Folder[] = [
	{
		id: '1',
		color: 'red',
		name: 'Folder Name',
		icon: 'folder_apps',
		users: usersMock,
		owner: { id: 'mock', avatar: null, fullName: 'Marlen Karimov' },
		userCount: 12,
		folderType: '',
	},
	{
		id: '2',
		color: 'green',
		name: 'Folder Name',
		icon: 'folder_apps',
		users: usersMock,
		owner: { id: 'mock', avatar: null, fullName: 'Marlen Karimov' },
		userCount: 12,
		folderType: '',
	},
];
