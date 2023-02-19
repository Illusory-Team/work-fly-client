import { IFolder } from '@/shared/types';

export const folderMock: IFolder[] = [
	{
		id: '1',
		color: 'red',
		folderName: 'Folder Name',
		icon: { name: 'folder_plant' },
		members: ['/avatar.jpg', '/avatar2.jpg', '/avatar3.jpg', '/avatar4.jpg'],
		owner: 'Marlen Karimov',
		tasks: 12,
	},
	{
		id: '2',
		color: 'green',
		folderName: 'Folder Name',
		icon: { name: 'folder_apps' },
		members: ['/avatar.jpg', '/avatar2.jpg', '/avatar3.jpg', '/avatar4.jpg'],
		owner: 'Dima Kavoon',
		tasks: 12,
	},
];
