import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// Import necessary libraries for testing
import { render, screen } from '@testing-library/react';
import App from './App';

// Write tests to verify the behavior of the App component
test('renders app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Note Taking App/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders add note button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add Note/i);
  expect(linkElement).toBeInTheDocument();
});
// Path: src/App.test.js
// Import necessary libraries for testing
import { render, screen } from '@testing-library/react';
import App from './App';

