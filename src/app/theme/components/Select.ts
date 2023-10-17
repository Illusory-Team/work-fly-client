import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiSelectType {
	defaultProps?: ComponentsProps['MuiSelect'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiSelect'];
	variants?: ComponentsVariants['MuiSelect'];
}

export const MuiSelect: MuiSelectType = {
	defaultProps: { variant: 'outlined' },
	styleOverrides: {
		nativeInput: ({ ownerState }) => ({
			padding: ownerState.size === 'small' ? '8px' : '16px',
		}),
	},
};
