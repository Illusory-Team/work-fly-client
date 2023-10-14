import { Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

interface MuiTypographyProps {
	defaultProps?: ComponentsProps['MuiTypography'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
	variants?: ComponentsVariants['MuiTypography'];
}

declare module '@mui/material/Typography/Typography' {
	interface TypographyPropsVariantOverrides {
		headline: true;
		subhead: true;
		content15_regular: true;
		content15_medium: true;
		content16_regular: true;
		caption14_regular: true;
		caption14_medium: true;
		caption13_regular: true;
		caption13_medium: true;
	}
}

export const MuiTypography: MuiTypographyProps = {
	defaultProps: {
		variantMapping: {
			content15_regular: 'p',
			content15_medium: 'p',
			content16_regular: 'p',
			headline: 'h2',
			subhead: 'p',
			caption14_regular: 'span',
			caption14_medium: 'span',
			caption13_regular: 'span',
			caption13_medium: 'span',
		},
	},
	variants: [
		{ props: { variant: 'headline' }, style: { fontSize: '17px', lineHeight: '24px', fontWeight: 500 } },
		{ props: { variant: 'subhead' }, style: { fontSize: '15px', lineHeight: '20px', fontWeight: 400 } },
	],
};
