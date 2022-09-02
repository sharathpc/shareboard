import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const connectionSlice = createSlice({
    name: 'connection',
    initialState: {
        isEstablishingConnection: false,
        isConnected: false
    },
    reducers: {
        startConnecting: (state, { payload }: PayloadAction<string | undefined>) => {
            state.isEstablishingConnection = true;
        },
        connectionEstablished: (state) => {
            state.isConnected = true;
            state.isEstablishingConnection = true;
        },
    },
})

export const { startConnecting, connectionEstablished } = connectionSlice.actions

export default connectionSlice.reducer