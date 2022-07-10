import React from 'react';
import { render } from '@testing-library/react';
import { BasicToDo } from './to-do.stories';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicToDo />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
