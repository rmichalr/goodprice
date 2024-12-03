import { render, fireEvent } from '@testing-library/react';
import { Content } from './Content';
import '@testing-library/jest-dom';

describe('Content component', () => {
	it('initial state is correct', () => {
		const { getByTestId } = render(<Content />);
		const inputField = getByTestId('product-search');
		expect(inputField).not.toHaveFocus();
		expect(inputField).not.toHaveValue();
	});

	it('focus and blur update state correctly', () => {
		const { getByTestId } = render(<Content />);
		const inputField = getByTestId('product-search');
		expect(inputField).not.toHaveFocus();
		inputField.focus();
		expect(inputField).toHaveFocus();
		inputField.blur();
		expect(inputField).not.toHaveFocus();
	  });

	it('field value is updated correctly', () => {
		const { getByTestId } = render(<Content />);
		const inputField = getByTestId('product-search');
		fireEvent.change(inputField, { target: { value: 'test value' } });
		expect(inputField).toHaveValue('test value');
		fireEvent.change(inputField, { target: { value: '' } });
		expect(inputField).toHaveValue('');
	});

	it('label positioning changes correctly', () => {
		const { getByTestId } = render(<Content />);
		const label = getByTestId('product-search-label');
		const inputField = getByTestId('product-search');
		fireEvent.focus(inputField);
		expect(label).toHaveClass('floating-label');
		fireEvent.blur(inputField);
		expect(label).not.toHaveClass('floating-label');
	});
});
