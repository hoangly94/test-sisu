import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
    sampleState: string,
}

export const initialState = {
    sampleState: "sampleStateValue",
} as PostState;

const resourceSlice = createSlice({
    name: 'resource',
    initialState,
    reducers: {
        setSampleState(state, { payload }: PayloadAction<string>) {
            state.sampleState = payload;
        },
    },
})

export const { setSampleState, } = resourceSlice.actions
export default resourceSlice.reducer