import { combineProviders } from '@/shared/lib/helpers/combineProviders';

import { QueryProvider } from './QueryProvider';
import { WithThemeProvider } from './theme.provider';

export const AppProvider = combineProviders(WithThemeProvider, QueryProvider);
