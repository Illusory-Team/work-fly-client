import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppState } from '@/app/store/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
