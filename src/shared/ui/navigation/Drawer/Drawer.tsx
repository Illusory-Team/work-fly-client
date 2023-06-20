import styled from '@emotion/styled';
import { Drawer as MuiDrawer } from '@mui/material';
import { FC } from 'react';

import { DrawerProps, StyledDrawerProps } from './Drawer.types';
import { DRAWER_MAX_WIDTH } from './constants';

const DrawerCustom = styled(MuiDrawer)<StyledDrawerProps>`
	.MuiDrawer-paper {
		max-width: ${({ size }) => DRAWER_MAX_WIDTH[size]};
		width: 100%;
	}
`;

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({ children, size = 'medium', ...props }) => {
	return (
		<DrawerCustom size={size} {...props}>
			{children}
		</DrawerCustom>
	);
};
