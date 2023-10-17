import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiOutlinedInputType {
	defaultProps?: ComponentsProps['MuiOutlinedInput'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiOutlinedInput'];
	variants?: ComponentsVariants['MuiOutlinedInput'];
}

export const MuiOutlinedInput: MuiOutlinedInputType = {
	styleOverrides: {
		input: ({ ownerState }) => ({
			padding: ownerState.size === 'small' ? '8px' : '16px',
		}),
		root: ({ ownerState }) => ({
			borderRadius: ownerState.size === 'small' ? '6px' : '12px',
		}),
	},
};
