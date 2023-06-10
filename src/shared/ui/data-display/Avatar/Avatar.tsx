import { Avatar as MuiAvatar } from '@mui/material';
import { FC } from 'react';

import { AvatarProps } from './Avatar.types';
import { AVATAR_SIZE } from './constants';

export const Avatar: FC<AvatarProps> = ({ size = 'medium', ...props }) => {
	return <MuiAvatar sx={{ width: AVATAR_SIZE[size], height: AVATAR_SIZE[size] }} {...props} />;
};
