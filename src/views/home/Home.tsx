'use client';

import { useEvent } from 'effector-react';
import { FC } from 'react';

import { FolderCard } from '@/entities/Folder';
import { $profileApi } from '@/entities/User';

import { Folder } from '@/shared/api';
import { Button } from '@/shared/ui';

import { PageLayout } from '@/widgets/PageLayout';

const mock: Folder = {
	id: '123',
	color: '#2491d0',
	name: 'Zhookkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
	icon: 'folder_home',
	users: [],
	owner: { avatar: '', fullName: 'Marlen Karimov', id: 'me' },
	userCount: 1,
	folderType: '',
};

export const HomeView: FC = () => {
	// FIX ME - Пока что для проверок
	const addUserEvent = useEvent($profileApi.setProfile);

	const addUser = () => {
		addUserEvent({
			id: '1',
			email: 'zhook@gmail.com',
			firstName: 'Dima',
			lastName: 'Kavoon',
			fullName: 'Dima Kavoon',
			phone: null,
			birthday: null,
			address: null,
			avatar: '',
			description: '',
			isOwner: true,
			position: 'member',
		});
	};

	return (
		<PageLayout>
			<FolderCard data={mock} />
			<Button onClick={addUser}>User Drawer</Button>
		</PageLayout>
	);
};
