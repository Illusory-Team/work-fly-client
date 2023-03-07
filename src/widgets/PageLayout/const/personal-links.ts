import { PersonalLinkType } from '../types/personal-link.type';

export const personalLinks: PersonalLinkType[] = [
	{
		title: 'Profile',
		href: '/?dialog=profile',
	},
	{
		title: 'Admin settings',
		href: '/?dialog=company-manage',
		isOwner: true,
	},
	{
		title: 'Archive',
		href: '/archive',
		isOwner: true,
	},
	{
		title: 'Sign out',
		href: '/',
		className: 'text-negative',
	},
];
