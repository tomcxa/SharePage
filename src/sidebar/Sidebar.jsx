import React from 'react'
import { Box, Text, Button, Collapsible } from 'grommet'

const Sidebar = ({ sidebar }) => {
  return (
    <Collapsible direction="horizontal" open={ sidebar }>
      <Box
        flex
        gridArea="sidebar"
        width="small"
        background="background-contrast"
      >
        { ['First', 'Second', 'Third'].map(name => (
          <Button key={ name } href="#" hoverIndicator>
            <Box pad={ { horizontal: 'medium', vertical: 'small' } }>
              <Text>{ name }</Text>
            </Box>
          </Button>
        )) }
      </Box>
    </Collapsible>
  )
}

export default Sidebar
