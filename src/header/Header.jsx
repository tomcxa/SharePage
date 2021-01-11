import React from 'react'
import { Anchor, Box, Button, Clock, Heading } from 'grommet'
import { Menu } from 'grommet-icons'
import SettingsMenu from './SettingsMenu'
import SearchField from './SearchField'
import { useHistory } from 'react-router-dom'

const Header = ({ toggleSidebar }) => {

  const history = useHistory()

  return (
    <Box
      gridArea="header"
      as="header"
      direction="row"
      align="center"
      justify="between"
      pad={ { horizontal: 'medium', vertical: 'small' } }
      background="orange"
    >
      <Box
        direction="row"
        align="center"
        justify="center"
      >
        <Button plain margin={{right: "small"}} icon={ <Menu /> } onClick={ toggleSidebar } />
        <Box onClick={() => history.push('/')}>
          <Heading level={1} size="small" margin="none">
            SharePage
          </Heading>
        </Box>
        
      </Box>
      <Box
        direction="row"
        align="center"
        justify="center"
      >
        <Clock type="analog" size="xsmall" margin={{right: "small"}}/>
        <SearchField />
      </Box>
      <SettingsMenu />
    </Box>
  )
}

export default Header
