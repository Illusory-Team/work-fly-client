import { NavigationLinks } from '@/shared/lib/constants/navigation-links';
import { IconNamesType } from '@/shared/ui';

export type LinkItemType = {
	text: string;
	to: NavigationLinks;
	icon: IconNamesType;
	count: number;
};

type TeamManageLinksType = {
	title: string;
	links: LinkItemType[];
};

export const linkList: LinkItemType[] = [
	{
		text: 'My tasks',
		to: NavigationLinks.HOME,
		icon: 'sidebar_mytask',
		count: 0,
	},
	{
		text: 'Task Manager',
		icon: 'task_right',
		to: NavigationLinks.TASK_MANAGER,
		count: 2,
	},
	{
		text: 'Storage',
		icon: 'sidebar_storage',
		to: NavigationLinks.STORAGE,
		count: 0,
	},
];

export const teamManageLinks: TeamManageLinksType = {
	title: 'Team Manage',
	links: [
		{
			text: 'Work status',
			icon: 'sidebar_efficiency',
			to: NavigationLinks.WORK_STATUS,
			count: 0,
		},
		{
			text: 'Contacts',
			icon: 'sidebar_contacts',
			to: NavigationLinks.CONTACTS,
			count: 0,
		},
	],
};
