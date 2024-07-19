import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test case for checking the presence of a 'Learn React' link in the App component.
 * This function doesn't accept any parameters and doesn't have a return value.
 * It calls the 'render' function with 'App' as its argument, 
 * searches for text 'learn react' on the screen,
 * and expects the searched text to be present in the document.
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
