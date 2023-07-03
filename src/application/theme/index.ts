import { createTheme } from '@mui/material';

import { components } from './components';
import { darkPalette } from './palette/dark';
import { lightPalette } from './palette/light';
import { typography } from './typography';

declare module '@mui/material/styles' {
	interface Palette {
		paragraph: Palette['primary'];
	}

	interface PaletteOptions {
		paragraph: PaletteOptions['primary'];
	}
}

export const lightTheme = createTheme({
	palette: lightPalette,
	components,
	typography,
});

export const darkTheme = createTheme({
	palette: darkPalette,
});
