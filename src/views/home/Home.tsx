'use client';

import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { FolderCard } from '@/entities/Folder';
import { setCurrentUser } from '@/entities/User';

import { IFolder } from '@/shared/types';
import { Button } from '@/shared/ui';

import { PageLayout } from '@/widgets/PageLayout';

const mock: IFolder = {
	id: '123',
	color: '#2491d0',
	folderName: 'Zhookkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
	icon: { name: 'sidebar_contacts' },
	members: [],
	owner: '12e3',
	tasks: 1,
};

export const HomeView: FC = () => {
	// FIX ME - Пока что для проверок
	const dispatch = useDispatch();

	const addUser = async () => {
		dispatch(
			setCurrentUser({
				csrfToken: 'sdsad',
				user: {
					id: '1',
					email: 'zhook@gmail.com',
					firstName: 'Dima',
					lastName: 'Kavoon',
					phone: 984545445545,
					birthday: null,
					address: null,
					description: '',
					position: {
						id: '1',
						value: 'member',
					},
					avatar: null,
					isOwner: true,
					csrfToken: 'lololo',
				},
			}),
		);
	};

	return (
		<PageLayout>
			<FolderCard data={mock} />
			<Button onClick={addUser}>User Drawer</Button>
		</PageLayout>
	);
};
