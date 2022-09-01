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
        setlanguage: (state, { payload }: PayloadAction<Language>) => {
            state.language = payload
        }
    },
})

export const { setlanguage } = languageSlice.actions

export default languageSlice.reducer