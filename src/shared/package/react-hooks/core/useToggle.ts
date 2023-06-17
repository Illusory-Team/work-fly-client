import { useCallback, useRef, useState } from 'react';

export const useToggle = (
	init = false,
	delayValue = 0,
	onTrue: (() => void) | null = null,
	onFalse: (() => void) | null = null,
) => {
	const [state, setState] = useState(init);
	const delay = useRef(true);

	const closeHandler = useCallback(() => {
		setState(false);
		onFalse && onFalse();
	}, []);

	const openHandler = useCallback(() => {
		setState(true);
		onTrue && onTrue();
	}, []);

	const toggleHandler = useCallback(() => {
		if (delay.current) {
			state ? closeHandler() : openHandler();
			delay.current = false;
			setTimeout(() => (delay.current = true), delayValue);
		}
	}, []);

	return {
		state,
		toggleHandler,
		openHandler,
		closeHandler,
	};
};
