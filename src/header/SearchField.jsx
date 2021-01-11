import React from 'react'
import { Box, TextInput } from 'grommet'
import { Search } from 'grommet-icons'

const SearchField = () => {
    return (
        <Box
            background="background"
            round="small"
        >
            <TextInput
                icon={ <Search /> }
                plain 
            />
        </Box>
    )
}

export default SearchField
