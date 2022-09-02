import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LANGUAGES_LIST } from '../../constants';


export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: LANGUAGES_LIST[18]
    },
    reducers: {
        setSocketLanguage: (state, { payload }: PayloadAction<string>) => {
            state.language = payload
        },
        setLanguage: (state, { payload }: PayloadAction<string>) => {
            state.language = payload
        }
    },
})

export const { setSocketLanguage, setLanguage } = languageSlice.actions

export default languageSlice.reducer