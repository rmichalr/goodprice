import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header', () => {
	it('should render the title', () => {
		render(<Header title="Test Title" />);
		expect(screen.getByText('Test Title')).toBeTruthy();
	});

	it('should render the icon when provided', () => {
		render(<Header data-testid="header-icon" title="Test Title" icon="test-icon" />);
		expect(screen.getByText('Test Title')).toBeTruthy();
		expect(screen.getByTestId('header-icon')).toBeTruthy();
	});

	it('should toggle the menu when the button is clicked', () => {
		render(<Header title="Test Title" />);
		const button = screen.getByTestId('menu-button');
		fireEvent.click(button);
		expect(screen.getByTestId('menu')).not.toHaveClass('hidden');
		fireEvent.click(button);
		expect(screen.getByTestId('menu')).toHaveClass('hidden');
	});
});
