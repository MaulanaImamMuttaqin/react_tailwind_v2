import React, { createContext, useReducer } from 'react'

// import Reducer
import auth from './reducers/auth'
import main from './reducers/main'
// import initial States
import authStates from './initialStates/authStates'
import mainStates from './initialStates/mainStates'

export const GlobalContext = createContext()

export default function ContextProvider({ children }) {
    const [authState, authDispatch] = useReducer(auth, authStates)
    const [mainState, mainDispatch] = useReducer(main, mainStates)
    return (
        <GlobalContext.Provider
            value={{
                authState, mainState, authDispatch, mainDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}