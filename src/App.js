import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { Grommet } from 'grommet'
import { customTheme } from './theme';
import { hpe } from 'grommet-theme-hpe';
import AppLayout from './appLayout'

console.log(JSON.stringify(hpe, null, 2))

function App() {

  const themeMode = useSelector(state => state.themeMode.name)

  return (
    <Router>
      <Grommet full theme={ customTheme } themeMode={ themeMode }>
        <AppLayout />
      </Grommet>
    </Router>
  );
}

export default App