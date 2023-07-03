import type { IconNamesType } from '@/shared/ui';

import { UserResponse } from './User';

export interface FolderAppearance {
	icon: IconNamesType;
	color: string;
}

type FolderUsers = Pick<UserResponse, 'id' | 'fullName' | 'avatar'>;

export interface FolderResponse {
	id: string;
	name: string;
	folderType: string;
	folderAppearance: FolderAppearance;
	owner: FolderUsers;
	users: FolderUsers[];
	_count: number;
}

export interface Folder extends Omit<FolderResponse, '_count' | 'folderAppearance'> {
	icon: IconNamesType;
	color: string;
	userCount: number;
}
