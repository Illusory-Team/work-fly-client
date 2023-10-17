import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiMenuItemType {
	defaultProps?: ComponentsProps['MuiMenuItem'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiMenuItem'];
	variants?: ComponentsVariants['MuiMenuItem'];
}

export const MuiMenuItem: MuiMenuItemType = {
	styleOverrides: {
		root: {
			padding: '8px',
			borderRadius: '6px',
			fontSize: '14px',
			lineHeight: '16px',
			fontWeight: 500,
		},
	},
};
