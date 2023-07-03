import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiCheckboxType {
	defaultProps?: ComponentsProps['MuiCheckbox'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiCheckbox'];
	variants?: ComponentsVariants['MuiCheckbox'];
}

export const MuiCheckbox: MuiCheckboxType = {
	styleOverrides: {
		root: {
			color: 'inherit',
		},
	},
};
