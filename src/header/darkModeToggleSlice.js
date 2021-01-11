import { createSlice } from '@reduxjs/toolkit'

const initialState = {name: 'light'}

const darkModeToggleSlice = createSlice({
    name: 'toggleMode',
    initialState,
    reducers: {
        toggleMode: (state, {payload}) => {
            state.name = payload ? 'dark' : 'light'
        }
    }
});

export const {
    toggleMode
} = darkModeToggleSlice.actions
export default darkModeToggleSlice.reducer