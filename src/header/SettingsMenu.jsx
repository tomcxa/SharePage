import React from 'react'
import { Avatar, Box, Menu } from 'grommet'
import { HelpOption, SettingsOption, Power, User } from 'grommet-icons'
import DarkModeToggle from './DarkModeToggle';
import { useHistory } from 'react-router-dom';

const SettingsMenu = () => {

    const history = useHistory()

    return (
        <Box
            direction="row"
            align="center"
            justify="between"
        >
            <Menu
                margin={{right: "small"}}
                plain
                dropProps={ {
                    align: { top: 'bottom', right: 'right' },
                    elevation: 'xlarge',
                    background: 'background-contrast',
                } }
                items={ [
                    // {
                    //     label: "Theme",
                    //     onClick: darkModeHandler,
                    //     icon: (
                    //         isDark
                    //             ? <Sun size="medium" />
                    //             : <Moon size="medium" />
                    //     ),
                    // },
                    {
                        label: "Settings",
                        onClick: () => { history.push('/settings') },
                        icon: <SettingsOption size="medium" />,
                        
                    },
                    { 
                        label: 'Profile',
                        onClick: () => { history.push('/profile') },
                        icon: <User />,
                    },
                    {
                        label: "Help",
                        onClick: () => { history.push('/help') },
                        icon: <HelpOption size="medium" />,
                    },
                    { label: 'Logout', icon: <Power />, reverse: true },
                ] }
            >
                {() => (<Box>
                    <Avatar
                        background="brand"
                        round="small"
                    >
                        SY
                    </Avatar>
                </Box>)}
            </Menu >
            <DarkModeToggle />
        </Box>
    )
}

export default SettingsMenu
