import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FC, PropsWithChildren } from 'react';

import { lightTheme } from '@/app/theme';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<MuiThemeProvider theme={lightTheme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
		</MuiThemeProvider>
	);
};
