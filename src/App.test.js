import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Little Lemon navigation', () => {
  render(<App />);
  const navLinks = screen.getAllByText(/little lemon/i);
  expect(navLinks.length).toBeGreaterThan(0);
});
