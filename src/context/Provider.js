import React, { createContext, useReducer } from 'react'

// import Reducer
import auth from './reducers/auth'
import main from './reducers/main'
import list from './reducers/list'
// import initial States
import authStates from './initialStates/authStates'
import mainStates from './initialStates/mainStates'
import listStates from './initialStates/listStates'

export const GlobalContext = createContext()

export default function ContextProvider({ children }) {
    const [authState, authDispatch] = useReducer(auth, authStates)
    const [mainState, mainDispatch] = useReducer(main, mainStates)
    const [listState, listDispatch] = useReducer(list, listStates)
    return (
        <GlobalContext.Provider
            value={{
                authState, mainState, listState, authDispatch, mainDispatch, listDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}