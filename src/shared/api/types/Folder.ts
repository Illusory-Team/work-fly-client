import type { IconProps } from '@/shared/ui';

import { IUser } from './User';

type IconNameType = Pick<IconProps, 'name'>;

export interface IFolder {
	id: string;
	members: IUser[];
	tasks: number;
	folderName: string;
	icon: IconNameType;
	owner: string;
	color: string;
}
