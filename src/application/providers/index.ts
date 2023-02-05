import { combineProviders } from '@/shared/helpers/combineProviders';

import { QueryProvider } from './QueryProvider';

export const AppProvider = combineProviders(QueryProvider);
