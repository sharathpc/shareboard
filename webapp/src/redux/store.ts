import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import rootReducer from './rootReducer'
import connectionMiddleware from './middleware/connectionMiddleware'
import loggerMiddleware from './middleware/loggerMiddleware'

export const history = createBrowserHistory();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        routerMiddleware(history),
        connectionMiddleware,
        loggerMiddleware
    ]),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()

export default store