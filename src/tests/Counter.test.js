import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const addButton = screen.getByText('+');
  fireEvent.click(addButton);
  expect(screen.getByTestId('count')).toHaveTextContent('1');
  fireEvent.click(addButton);
  expect(screen.getByTestId('count')).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const minusButton = screen.getByText('-');
  fireEvent.click(minusButton);
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
  fireEvent.click(minusButton);
  expect(screen.getByTestId('count')).toHaveTextContent('-2');
});