import { ConfigProvider } from 'antd';
import { FC } from 'react';

import { themeConfig } from '../theme';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};
