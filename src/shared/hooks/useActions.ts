'use client';

import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActions = (action: any) => {
	const dispatch = useDispatch();

	const actions = useMemo(() => ({ ...action }), [action]);

	return bindActionCreators(actions, dispatch);
};
