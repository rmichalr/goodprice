import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
	it('should render the footer component', () => {
		render(<Footer />);

		expect(screen.getByTestId('privacy-policy')).toBeInTheDocument();
		expect(screen.getByTestId('terms-of-service')).toBeInTheDocument();
		expect(screen.getByTestId('contact')).toBeInTheDocument();
	});
});
