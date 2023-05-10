// eslint-disable-next-line import/order
import { render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { TextField } from './TextField';
import { TextFieldProps } from './TextField.types';

const textFieldProps: TextFieldProps = {
	label: 'test label',
	type: 'text',
	variant: 'outlined',
	subText: 'test sub text',
	required: true,
	inputSize: 'xs',
};

const mockChange = jest.fn();

describe('UI/TextField', () => {
	it('should render TextField', () => {
		render(<TextField />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByRole('textbox')).toHaveClass('input');
	});

	it('should render component with props', () => {
		const { container } = render(<TextField {...textFieldProps} />);

		expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
		expect(screen.getByRole('textbox')).toHaveAttribute('required');

		expect(screen.getByText('test label')).toBeInTheDocument();
		expect(screen.getByText('test label')).toHaveTextContent(/test label/i);

		expect(container.firstChild).toHaveClass('xs', 'container', 'outlined', 'primary');
	});

	it('should have focus', () => {
		render(<TextField {...textFieldProps} />);

		screen.getByRole('textbox').focus();

		expect(screen.getByRole('textbox')).toHaveFocus();
	});

	it('should change value', async () => {
		render(<TextField {...textFieldProps} onChange={mockChange} />);

		const input = screen.getByRole('textbox');

		expect(input).toHaveValue('');

		await userEvent.type(input, 'test value');

		expect(input).toHaveValue('test value');

		expect(mockChange).toHaveBeenCalled();
		expect(mockChange).toHaveBeenCalledTimes(10);
	});

	it('should handle type of input by click on icon', async () => {
		const { container } = render(<TextField data-testid="input" type="password" />);

		const input = screen.getByTestId('input');
		const icon = screen.getByTestId('icon-toggle');
		const use = container.querySelector('use');

		expect(input).toHaveAttribute('type', 'password');
		expect(icon).toBeInTheDocument();
		expect(use).toHaveAttribute('xlink:href', '/images/sprites/icons.svg#other_closed');

		await act(async () => {
			await userEvent.click(icon);
		});

		expect(use).toHaveAttribute('xlink:href', '/images/sprites/icons.svg#other_show');
		expect(input).toHaveAttribute('type', 'text');
	});
});
