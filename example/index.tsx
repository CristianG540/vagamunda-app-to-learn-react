import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Thing } from 'inmo-tsdx-demo-lib-1';
import { LearningApp } from '../.';

const App = () => {
  return (
    <div>
      <LearningApp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
