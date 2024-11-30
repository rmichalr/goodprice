import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
  render(<Home />);
  expect(screen.getByText(/Welcome to GoodPrice!/i)).toBeTruthy();
});