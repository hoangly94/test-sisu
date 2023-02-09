import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    sampleState: string,
}

export const initialState = {
    sampleState: "sampleStateValue",
} as AuthState;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSampleState(state, { payload }: PayloadAction<string>) {
            state.sampleState = payload;
        },
    },
})

export const { setSampleState, } = authSlice.actions
export default authSlice.reducer