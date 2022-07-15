import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Card } from './Card.stories';

describe('Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Card
        username="Pugliese"
        image="https://img.freepik.com/vector-gratis/pato-lindo-blanco_1308-41058.jpg?w=360"
        rate="8.1"
        date="16 Mar 2021"
        review="A lot of text"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
