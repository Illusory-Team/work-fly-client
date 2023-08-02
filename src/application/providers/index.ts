import { combineProviders } from '@/shared/lib/helpers/combineProviders';

import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './theme.provider';

export const AppProvider = combineProviders(ThemeProvider, QueryProvider);
