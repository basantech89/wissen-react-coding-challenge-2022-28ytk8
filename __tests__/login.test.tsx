import React from 'react';

import Login from '../containers/Login';

import render, { screen } from '../utils/test-utils';

describe('Login', () => {
  test('Next button should be disabled', () => {
    render(<Login />);
    const notFoundBtn = screen.getByText(/next/i);
    expect(notFoundBtn).toBeDisabled();
  });
});
