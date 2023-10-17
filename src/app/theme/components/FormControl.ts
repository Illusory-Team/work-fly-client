import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiFormControlType {
	defaultProps?: ComponentsProps['MuiFormControl'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiFormControl'];
	variants?: ComponentsVariants['MuiFormControl'];
}

export const MuiFormControl: MuiFormControlType = {
	defaultProps: { variant: 'standard' },
};
