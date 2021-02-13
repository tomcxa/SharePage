import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    spacesList: [
        {
            "name": "First space about cats",
            "key": "FSAC",
            "description": "This is first space, created by admin. Space described cats life",
            "isPublic": true
        },
        {
            "name": "Second space about dogs",
            "key": "SSAD",
            "description": "This is second space, created by admin. Space described dogs life",
            "isPublic": false
        }],
    selectedSpace: {}
}

const spacesListSlice = createSlice({
    name: "spaces",
    initialState,
    reducers: {
        getSpace: (state, { payload }) => {
            state.selectedSpace = payload
        }
    }
});

export const {
    getSpace,
} = spacesListSlice.actions
export default spacesListSlice.reducer