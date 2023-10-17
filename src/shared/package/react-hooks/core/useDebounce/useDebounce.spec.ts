import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useDebounce } from './index';

describe('useDebounce hook testing', () => {
	it('Should activate callback after 200ms', () => {
		const fn = vi.fn();
		vi.useFakeTimers();
		const {
			result: { current: callback },
		} = renderHook(() => useDebounce(fn, 200));
		callback();

		expect(fn).toHaveBeenCalledTimes(0);

		act(() => {
			vi.runAllTimers();
		});

		expect(fn).toHaveBeenCalledTimes(1);
	});

	it('Should does not activate callback in 1000ms, callback activate before 1000ms', () => {
		const fn = vi.fn();
		vi.useFakeTimers();
		const {
			result: { current: callback },
		} = renderHook(() => useDebounce(fn, 1000));
		callback();

		expect(fn).not.toHaveBeenCalled();
		vi.advanceTimersByTime(500);
		callback();
		expect(fn).not.toHaveBeenCalled();

		vi.advanceTimersByTime(1000);
		expect(fn).toHaveBeenCalledTimes(1);
	});
});
