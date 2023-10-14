import { combineProviders } from '@/shared/lib/helpers/combineProviders';

import { GlobalCssPriority } from './GlobalCssPriority';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './theme.provider';

export const AppProvider = combineProviders(ThemeProvider, QueryProvider, GlobalCssPriority);
