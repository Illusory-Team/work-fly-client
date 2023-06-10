import { AvatarProps as MuiAvatarProps } from '@mui/material';

import { SizeType } from '@/shared/ui/types';

export interface AvatarProps extends MuiAvatarProps {
	size?: SizeType;
}
