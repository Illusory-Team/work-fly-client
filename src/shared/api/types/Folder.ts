import type { IconNamesType } from '@/shared/ui';

import { UserRes } from './User';

export interface FolderAppearance {
	icon: IconNamesType;
	color: string;
}

type FolderUsers = Pick<UserRes, 'id' | 'fullName' | 'avatar'>;

export interface FolderRes {
	id: string;
	name: string;
	folderType: string;
	folderAppearance: FolderAppearance;
	owner: FolderUsers;
	users: FolderUsers[];
	_count: number;
}

export interface Folder extends Omit<FolderRes, '_count' | 'folderAppearance'> {
	icon: IconNamesType;
	color: string;
	userCount: number;
}
