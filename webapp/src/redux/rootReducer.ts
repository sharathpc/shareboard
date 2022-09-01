// src/app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'

import languageReducer from "./reducers/language";
import codeEditorReducer from "./reducers/codeEditor";
import textEditorReducer from "./reducers/textEditor";

const rootReducer = combineReducers({
    language: languageReducer,
    codeEditor: codeEditorReducer,
    textEditor: textEditorReducer
})

export type RootState = ReturnType<any>

export default rootReducer