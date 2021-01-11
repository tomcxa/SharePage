import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from 'grommet'

const Space = () => {

    const selectedSpace = useSelector(state => state.spaces.selectedSpace)
    console.log(selectedSpace)
    return (
        <Box>
            {JSON.stringify(selectedSpace, null, 2)}
        </Box>
    )
}

export default Space
