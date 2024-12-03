import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Content />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the welcome message', () => {
    render(<Content />);
    expect(screen.getByText(/Welcome to our page!/i)).toBeTruthy();
  });

  it('should display the content area message', () => {
    render(<Content />);
    expect(screen.getByText(/This is the content area. Here you can add any content you like./i)).toBeTruthy();
  });
});
