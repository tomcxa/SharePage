import React, { useState } from 'react'
import { Grid } from 'grommet'

import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import Main from '../main/Main';

const AppLayout = () => {

    const [sidebar, setSidebar] = useState(true)

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <Grid
        fill
        rows={ ['auto', 'flex'] }
        columns={ ['auto', 'flex'] }
        areas={ [
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ] }
      >
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar sidebar={sidebar} />
        <Main />
      </Grid>
    )
}

export default AppLayout
