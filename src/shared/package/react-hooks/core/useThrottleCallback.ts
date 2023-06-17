import { useRef } from 'react';

export const useThrottleCallback = (callback: () => void, delayValue: number) => {
	const delay = useRef(true);

	return (): void => {
		if (delay.current) {
			callback();
			delay.current = false;
			setTimeout(() => (delay.current = true), delayValue);
		}
	};
};
