import { useState } from 'react';

import { useThrottleCallback } from '../useThrottleCallback';

export const useToggle = (
	init = false,
	throttleTimeMs = 0,
	toTrueCallback: (() => void) | null = null,
	toFalseCallback: (() => void) | null = null,
) => {
	const [state, setState] = useState(init);

	const toggle = useThrottleCallback(() => {
		if (state) {
			setState(false);
			toFalseCallback && toFalseCallback();
		} else {
			setState(true);
			toTrueCallback && toTrueCallback();
		}
	}, throttleTimeMs);

	return {
		state,
		toggle,
	};
};
