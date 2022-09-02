import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LANGUAGES_LIST } from '../../constants';

export interface Language {
    label: string,
    value: string,
}

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: LANGUAGES_LIST[2]
    },
    reducers: {
        setSocketLanguage: (state, { payload }: PayloadAction<Language>) => {
            state.language = payload
        },
        setLanguage: (state, { payload }: PayloadAction<Language>) => {
            state.language = payload
        }
    },
})

export const { setSocketLanguage, setLanguage } = languageSlice.actions

export default languageSlice.reducer