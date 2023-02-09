import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SubscriptionState {
    sampleState: string,
}

export const initialState = {
    sampleState: "sampleStateValue",
} as SubscriptionState;

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        setSampleState(state, { payload }: PayloadAction<string>) {
            state.sampleState = payload;
        },
    },
})

export const { setSampleState, } = subscriptionSlice.actions
export default subscriptionSlice.reducer