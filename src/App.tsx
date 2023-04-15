import React from 'react';
import './styles/App.css';

import Root from './router/Root';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Root />
    </div>
  );
};

export default App;
