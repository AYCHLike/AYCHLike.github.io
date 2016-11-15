import React from 'react';
import HeaderContainer from './header_container.js';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <div className="main">
      { children }
    </div>
  </div>
);

export default App;
