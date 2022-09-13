import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Card } from '../src/index';

function App() {
  return (
    <div>
      <Card
        username="Pugliese"
        image="https://img.freepik.com/vector-gratis/pato-lindo-blanco_1308-41058.jpg?w=360"
        rate="8.1"
        date="16 Mar 2021"
        review="A lot of text"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
