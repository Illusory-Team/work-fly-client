import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useUpdateEffect } from './index';

describe('useUpdateEffect hook testing', () => {
	it('Should return undefined', () => {
		const fn = vi.fn();
		const { result } = renderHook(() => useUpdateEffect(fn));
		expect(typeof result.current).toBe('undefined');
	});

	it('Should function does not activate', () => {
		const fn = vi.fn();
		renderHook(() => useUpdateEffect(fn));
		expect(fn).toHaveBeenCalledTimes(0);
	});

	it('Should function activate with rerender(update)', () => {
		const fn = vi.fn();
		const { rerender } = renderHook(() => useUpdateEffect(fn));
		rerender();
		expect(fn).toHaveBeenCalledTimes(1);
		rerender();
		expect(fn).toHaveBeenCalledTimes(2);
	});

	it('Should function does not activate with empty array deps', () => {
		const fn = vi.fn();
		const { rerender } = renderHook(() => useUpdateEffect(fn, []));
		rerender();
		expect(fn).toHaveBeenCalledTimes(0);
		rerender();
		expect(fn).toHaveBeenCalledTimes(0);
	});
});
