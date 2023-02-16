import type { IconProps } from '@/shared/ui/Icon';

type IconNameType = Pick<IconProps, 'name'>;

export interface IFolder {
	id: string;
	members: string[];
	tasks: number;
	folderName: string;
	icon: IconNameType;
	owner: string;
	color: string;
}
