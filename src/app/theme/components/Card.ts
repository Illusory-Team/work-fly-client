import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiCardType {
	defaultProps?: ComponentsProps['MuiCard'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiCard'];
	variants?: ComponentsVariants['MuiCard'];
}

export const MuiCard: MuiCardType = {
	styleOverrides: {
		root: {
			background: '#ffffff',
		},
	},
};
