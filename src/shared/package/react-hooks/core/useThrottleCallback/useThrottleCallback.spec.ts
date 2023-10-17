import { renderHook } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';

import { useThrottleCallback } from './index';

describe('useThrottleCallback hook testing', () => {
	it('Should return function', () => {
		const fn = vi.fn();
		const { result } = renderHook(() => useThrottleCallback(fn, 500));
		expect(typeof result.current).toBe('function');
	});

	it('Should function called', () => {
		const fn = vi.fn();
		const { result } = renderHook(() => useThrottleCallback(fn, 500));
		result.current();
		expect(fn).toHaveBeenCalledTimes(1);
	});

	it('Should function called time 1, does not called 4', () => {
		const fn = vi.fn();
		const { result } = renderHook(() => useThrottleCallback(fn, 500));
		result.current();
		result.current();
		result.current();
		result.current();
		result.current();
		expect(fn).toHaveBeenCalledTimes(1);
	});

	it('Should called after throttle time', () => {
		vi.useFakeTimers();
		const fn = vi.fn();
		const { result } = renderHook(() => useThrottleCallback(fn, 500));
		result.current();
		result.current();
		expect(fn).toHaveBeenCalledTimes(1);
		vi.advanceTimersByTime(500);
		result.current();
		expect(fn).toHaveBeenCalledTimes(2);
	});
});
