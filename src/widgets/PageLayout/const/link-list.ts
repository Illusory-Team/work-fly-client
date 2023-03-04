import { IconNamesType } from '@/shared/ui/Icon/Icon.types';

import { LinkHref } from './link-hrefs';

export type LinkItemType = {
	text: string;
	to: LinkHref;
	icon: IconNamesType;
};

type TeamManageLinksType = {
	title: string;
	links: LinkItemType[];
};

export const linkList: LinkItemType[] = [
	{
		text: 'My tasks',
		to: LinkHref.HOME,
		icon: 'sidebar_mytask',
	},
	{
		text: 'Task Manager',
		icon: 'task_right',
		to: LinkHref.TASK_MANAGER,
	},
	{
		text: 'Storage',
		icon: 'sidebar_storage',
		to: LinkHref.STORAGE,
	},
];

export const teamManageLinks: TeamManageLinksType = {
	title: 'Team Manage',
	links: [
		{
			text: 'Work status',
			icon: 'sidebar_efficiency',
			to: LinkHref.WORK_STATUS,
		},
		{
			text: 'Contacts',
			icon: 'sidebar_contacts',
			to: LinkHref.CONTACTS,
		},
	],
};
