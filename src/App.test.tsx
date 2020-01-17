import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hypnotoad', () => {
  const { getByText } = render(<App />);
  const hypnotoad = getByText(/hypnotoad/i);
  expect(hypnotoad).toBeInTheDocument();
});
