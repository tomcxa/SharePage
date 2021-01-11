import React from 'react'
import { Box, Heading, Text } from 'grommet'

const SpacesListItem = ({ item, setSelected }) => {

    const handleClick = () => {
        setSelected(item)
    }

    return (
        <Box
            direction="row"
            align="center"
            // border="medium"
            border="horizontal"
            // elevation="xsmall"
            // round="xsmall"
            gap="medium"
            pad="xsmall"
            onClick={handleClick}
            hoverIndicator
        >
            <Heading level="3" size="small" margin="none" >
                { item.name }
            </Heading>
            <Text>
                { item.description }
            </Text>
        </Box>
    )
}

export default SpacesListItem
