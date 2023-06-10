import { DrawerProps as MuiDrawerProps } from '@mui/material';

import { SizeType } from '../../types';

export interface DrawerProps extends MuiDrawerProps {
	size?: SizeType;
}

export interface StyledDrawerProps {
	size: SizeType;
}
