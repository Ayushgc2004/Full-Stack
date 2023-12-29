import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Foodie header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Foodie/i);
  expect(headerElement).toBeInTheDocument();
});
