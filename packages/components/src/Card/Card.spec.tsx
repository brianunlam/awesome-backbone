import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Card } from './Card.stories';

describe('Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card classes=" h-64 w-64" variant='elevation' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});