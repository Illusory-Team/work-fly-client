import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiMenuType {
	defaultProps?: ComponentsProps['MuiMenu'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiMenu'];
	variants?: ComponentsVariants['MuiMenu'];
}

export const MuiMenu: MuiMenuType = {
	styleOverrides: {
		paper: { borderRadius: '12px' },
		list: { padding: '8px' },
	},
};
