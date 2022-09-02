import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const codeEditorSlice = createSlice({
    name: 'codeEditor',
    initialState: {
        value: '// Write some code'
    },
    reducers: {
        setSocketValue: (state, { payload }: PayloadAction<string>) => {
            state.value = payload
        },
        setValue: (state, { payload }: PayloadAction<string>) => {
            state.value = payload
        }
    },
})

export const { setSocketValue, setValue } = codeEditorSlice.actions

export default codeEditorSlice.reducer