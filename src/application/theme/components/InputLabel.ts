import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiInputLabelType {
	defaultProps?: ComponentsProps['MuiInputLabel'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiInputLabel'];
	variants?: ComponentsVariants['MuiInputLabel'];
}

export const MuiInputLabel: MuiInputLabelType = {
	styleOverrides: {
		root: ({ theme }) => ({
			color: theme.palette.paragraph.light,
		}),
	},
};
