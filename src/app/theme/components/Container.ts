import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiContainerType {
	defaultProps?: ComponentsProps['MuiContainer'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiContainer'];
	variants?: ComponentsVariants['MuiContainer'];
}

export const MuiContainer: MuiContainerType = {
	defaultProps: { maxWidth: 'lg' },
	styleOverrides: { maxWidthLg: '1920px', root: { height: '100%' } },
};
