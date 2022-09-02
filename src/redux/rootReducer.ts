// src/app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import connectionReducer from "./reducers/connection";
import languageReducer from "./reducers/language";
import codeEditorReducer from "./reducers/codeEditor";
import textEditorReducer from "./reducers/textEditor";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    connection: connectionReducer,
    language: languageReducer,
    codeEditor: codeEditorReducer,
    textEditor: textEditorReducer
})

export type RootState = ReturnType<any>

export default rootReducer