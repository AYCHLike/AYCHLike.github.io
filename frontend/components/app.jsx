import React from 'react';
import HeaderContainer from './header_container.jsx';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    { children }
  </div>
);

export default App;
