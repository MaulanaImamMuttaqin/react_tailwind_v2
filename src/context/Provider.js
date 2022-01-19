import React, { createContext, useReducer } from 'react'

// import Reducer
import auth from './reducers/auth'


// import initial States
import authStates from './initialStates/authStates'


export const GlobalContext = createContext()

export default function ContextProvider({ children }) {
    const [authState, authDispatch] = useReducer(auth, authStates)

    return (
        <GlobalContext.Provider
            value={{
                authState, authDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}