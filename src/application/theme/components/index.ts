import { Components, Theme } from '@mui/material';

import { MuiButton } from './Button';
import { MuiCard } from './Card';
import { MuiCheckbox } from './Checkbox';
import { MuiMenu } from './Menu';
import { MuiMenuItem } from './MenuItem';
import { MuiSkeleton } from './Skeleton';
import { MuiOutlinedInput } from './TextField';
import { MuiTypography } from './Typography';

export const components: Components<Omit<Theme, 'components'>> = {
	MuiButton,
	MuiCheckbox,
	MuiTypography,
	MuiMenu,
	MuiMenuItem,
	MuiSkeleton,
	MuiOutlinedInput,
	MuiCard,
};
