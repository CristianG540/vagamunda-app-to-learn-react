import React from 'react';
import * as ReactDOM from 'react-dom';
import { Main as Home } from './Home.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
