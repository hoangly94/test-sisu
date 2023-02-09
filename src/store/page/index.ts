import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PageState {
    sampleState: string,
}

export const initialState = {
    sampleState: "sampleStateValue",
} as PageState;

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setSampleState(state, { payload }: PayloadAction<string>) {
            state.sampleState = payload;
        },
    },
})

export const { setSampleState, } = pageSlice.actions
export default pageSlice.reducer