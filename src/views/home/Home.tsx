'use client';

import { FC } from 'react';

import { FolderCard } from '@/entities/Folder';
import { NotificationCard } from '@/entities/Notification';
import { userSelector } from '@/entities/User';

import { useAppSelector } from '@/shared/hooks';
import { IFolder } from '@/shared/types';

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
	const { user } = useAppSelector(userSelector);

	return (
		<PageLayout>
			<FolderCard data={mock} />
		</PageLayout>
	);
};
