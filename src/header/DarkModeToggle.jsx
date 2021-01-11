import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'grommet'
import { Sun, Moon } from 'grommet-icons'

import { toggleMode } from './darkModeToggleSlice'

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toggleMode(isDark))
    }, [dispatch, isDark])

    const darkModeHandler = () => {
        setIsDark(!isDark)
    }
    return (
        <Button
            onClick={ darkModeHandler }
            icon={ isDark
                ? <Sun size="medium" />
                : <Moon size="medium" />
            }
        />
    )
}

export default DarkModeToggle
