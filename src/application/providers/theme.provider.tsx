import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FC, PropsWithChildren } from 'react';

import { lightTheme } from '@/app/theme';

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider theme={lightTheme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
		</ThemeProvider>
	);
};
