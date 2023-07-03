import { AvatarGroupProps as MuiAvatarGroupProps } from '@mui/material';

import { SizeType } from '../../types';

export interface AvatarGroupProps extends MuiAvatarGroupProps {
	size?: SizeType;
}

export interface StyledAvatarGroupProps {
	size: SizeType;
}
