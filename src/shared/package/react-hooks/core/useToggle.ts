import { useCallback, useState } from 'react';

import { useThrottleCallback } from './useThrottleCallback';

export const useToggle = (
	init = false,
	delayValue = 0,
	onTrue: (() => void) | null = null,
	onFalse: (() => void) | null = null,
) => {
	const [state, setState] = useState(init);

	const closeHandler = useCallback(() => {
		setState(false);
		onFalse && onFalse();
	}, []);

	const openHandler = useCallback(() => {
		setState(true);
		onTrue && onTrue();
	}, []);

	const toggleHandler = useThrottleCallback(() => {
		state ? closeHandler() : openHandler();
	}, delayValue);

	return {
		state,
		toggleHandler,
		openHandler,
		closeHandler,
	};
};
