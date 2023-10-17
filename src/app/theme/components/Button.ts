import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiButtonType {
	defaultProps?: ComponentsProps['MuiButton'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
	variants?: ComponentsVariants['MuiButton'];
}

export const MuiButton: MuiButtonType = {
	defaultProps: { variant: 'contained' },
	styleOverrides: {
		root: ({ ownerState }) => ({
			lineHeight: ownerState.size === 'large' ? '20px' : ownerState.size === 'medium' ? '24px' : '16px',
			fontSize: ownerState.size === 'large' ? '18px' : ownerState.size === 'medium' ? '16px' : '14px',
			borderRadius: ownerState.size === 'large' ? '10px' : ownerState.size === 'medium' ? '8px' : '6px',
			padding: ownerState.size === 'large' ? '16px 24px' : ownerState.size === 'medium' ? '8px 16px' : '8px',
		}),
	},
};
