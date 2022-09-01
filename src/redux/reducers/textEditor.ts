import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const textEditorSlice = createSlice({
    name: 'textEditor',
    initialState: {
        value: ''
    },
    reducers: {
        setValue: (state, { payload }: PayloadAction<string>) => {
            state.value = payload
        }
    },
})

export const { setValue } = textEditorSlice.actions

export default textEditorSlice.reducer