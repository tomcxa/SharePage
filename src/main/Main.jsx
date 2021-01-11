import React from 'react'
import { Box } from 'grommet';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../spaces/Home';
import Settings from '../settings/Settings';
import Help from '../help/Help';
import Space from '../space/Space';

const Main = () => {
  return (
    <Box gridArea="main">
      <Switch>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path='/space/:key'>
          <Space />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Box>
  )
}

export default Main
