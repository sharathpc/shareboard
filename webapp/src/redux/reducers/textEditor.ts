import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const textEditorSlice = createSlice({
    name: 'textEditor',
    initialState: {
        value: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Enter some text...","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'
    },
    reducers: {
        setValue: (state, { payload }: PayloadAction<string>) => {
            state.value = payload
        }
    },
})

export const { setValue } = textEditorSlice.actions

export default textEditorSlice.reducer