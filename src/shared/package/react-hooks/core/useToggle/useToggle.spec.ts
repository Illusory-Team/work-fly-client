import { act, renderHook } from '@testing-library/react';

import { useToggle } from './index';

describe('useToggle hook testing', () => {
	it('Should hook returned values', () => {
		const { result } = renderHook(() => useToggle());
		const { toggle, state } = result.current;
		expect(typeof result.current).toBe('object');
		expect(state).toBe(false);
		expect(typeof toggle).toBe('function');
	});

	it('Should value toggle to true or false', async () => {
		const { result } = renderHook(() => useToggle());
		const { state, toggle } = result.current;

		expect(state).toBe(false);
		act(() => {
			toggle();
		});
		expect(result.current.state).toBe(true);
		act(() => {
			toggle();
		});
		expect(state).toBe(false);
	});

	it('Should initial value true', () => {
		const {
			result: {
				current: { state },
			},
		} = renderHook(() => useToggle(true));

		expect(state).toBe(true);
	});

	it('Should throttle time working and fnToTrue callback activate', () => {
		const fnToTrue = jest.fn();
		const fnToFalse = jest.fn();
		const { result } = renderHook(() => useToggle(false, 1000, fnToTrue, fnToFalse));
		const { toggle } = result.current;
		act(() => {
			toggle();
		});
		expect(fnToTrue).toHaveBeenCalledTimes(1);
		act(() => {
			toggle();
		});
		expect(fnToFalse).toHaveBeenCalledTimes(0);
	});

	it('Should throttle time working and fnToFalse callback activate', () => {
		const fnToTrue = jest.fn();
		const fnToFalse = jest.fn();
		const { result } = renderHook(() => useToggle(true, 1000, fnToTrue, fnToFalse));
		const { toggle } = result.current;
		act(() => {
			toggle();
		});
		expect(fnToFalse).toHaveBeenCalledTimes(1);
		act(() => {
			toggle();
		});
		expect(fnToTrue).toHaveBeenCalledTimes(0);
	});
});
