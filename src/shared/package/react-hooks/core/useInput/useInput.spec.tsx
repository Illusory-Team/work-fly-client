import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useInput } from './index';

describe('useInput hook testing', () => {
	it('Should return object, property value string and onChange function', () => {
		const { result } = renderHook(() => useInput());
		expect(typeof result.current).toBe('object');
		expect(typeof result.current.value).toBe('string');
		expect(typeof result.current.onChange).toBe('function');
	});

	it('Should initial param working', () => {
		const value = 'I string';

		const { result } = renderHook(() => useInput(value));
		expect(result.current.value).toBe(value);
	});

	it('Should change value', () => {
		const value = 'I string';
		const { result } = renderHook(() => useInput());
		render(<input {...result.current} />);
		const input = screen.getByRole('textbox');
		expect(result.current.value).toBe('');
		fireEvent.change(input, { target: { value } });
		expect(result.current.value).toBe(value);
	});
});
