import React from 'react';
import { Router } from '@reach/router';

import Home from './containers/Home';
import GlobalStyles from './components/GlobalStyles';

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}
