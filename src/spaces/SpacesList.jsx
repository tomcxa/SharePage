import React, { useEffect }  from 'react'
import { Box } from 'grommet'
import { useDispatch, useSelector } from 'react-redux'
import SpaceItem from './SpacesListItem'
import { useHistory } from 'react-router-dom'
import { selectSpace } from './spacesListSlice'

const SpacesList = () => {
    const {spacesList, selectedSpace} = useSelector(state => state.spaces)
    const dispatch = useDispatch()
    const history = useHistory()

    const setSelected = (item) => {
        dispatch(selectSpace(item))
    }

    useEffect(() => {
        if (selectedSpace.key) history.push(`/space/${selectedSpace.key}`)
    }, [selectedSpace.key, history])

    return (
        <Box pad="medium" gap="small">
            {
                spacesList.map(space => (
                    <SpaceItem
                        setSelected={ setSelected }
                        key={ space.key }
                        item={ space }
                    />)
                )
            }
        </Box>
    )
}

export default SpacesList
