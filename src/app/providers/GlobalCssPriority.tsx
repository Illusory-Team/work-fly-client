import { StyledEngineProvider } from '@mui/material';
import { FC } from 'react';

export const GlobalCssPriority: FC<PropsWithChildren> = ({ children }) => {
	return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};
