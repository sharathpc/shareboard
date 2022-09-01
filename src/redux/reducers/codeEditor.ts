import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const codeEditorSlice = createSlice({
    name: 'codeEditor',
    initialState: {
        value: '// Write some code'
    },
    reducers: {
        setValue: (state, { payload }: PayloadAction<string>) => {
            state.value = payload
        }
    },
})

export const { setValue } = codeEditorSlice.actions

export default codeEditorSlice.reducer