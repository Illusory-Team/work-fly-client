import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import React from 'react';

declare module '@mui/material/styles/createTypography' {
	interface Typography {
		headline: React.CSSProperties;
		subhead: React.CSSProperties;
		content15_regular: React.CSSProperties;
		content15_medium: React.CSSProperties;
		content16_regular: React.CSSProperties;
		caption14_regular: React.CSSProperties;
		caption14_medium: React.CSSProperties;
		caption13_regular: React.CSSProperties;
		caption13_medium: React.CSSProperties;
	}

	interface TypographyOptions {
		headline?: React.CSSProperties;
		subhead?: React.CSSProperties;
		content15_regular?: React.CSSProperties;
		content15_medium?: React.CSSProperties;
		content16_regular?: React.CSSProperties;
		caption14_regular?: React.CSSProperties;
		caption14_medium?: React.CSSProperties;
		caption13_regular?: React.CSSProperties;
		caption13_medium?: React.CSSProperties;
	}
}

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
	h1: {
		fontSize: '40px',
		fontWeight: 600,
		lineHeight: '52px',
	},
	h2: {
		fontSize: '32px',
		fontWeight: 500,
		lineHeight: '40px',
	},
	h3: {
		fontSize: '28px',
		fontWeight: 600,
		lineHeight: '40px',
	},
	h4: {
		fontSize: '24px',
		fontWeight: 600,
		lineHeight: '28px',
	},
	h5: {
		fontSize: '14px',
		fontWeight: 600,
		lineHeight: '24px',
	},
	headline: {
		fontSize: '7px',
		fontWeight: 500,
		lineHeight: '24px',
	},
	subhead: {
		fontSize: '15px',
		fontWeight: 400,
		lineHeight: '20px',
	},
	content15_regular: {
		fontSize: '15px',
		fontWeight: 400,
		lineHeight: '24px',
	},
	content15_medium: {
		fontSize: '15px',
		fontWeight: 500,
		lineHeight: '24px',
	},
	content16_regular: {
		fontSize: '16px',
		fontWeight: 400,
		lineHeight: '24px',
	},
	caption14_regular: {
		fontSize: '14px',
		fontWeight: 400,
		lineHeight: '20px',
	},
	caption14_medium: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '20px',
	},
	caption13_regular: {
		fontSize: '13px',
		fontWeight: 400,
		lineHeight: '20px',
	},
	caption13_medium: {
		fontSize: '13px',
		fontWeight: 500,
		lineHeight: '20px',
	},
};
