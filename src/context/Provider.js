import React, { createContext, useEffect, useReducer } from 'react'

// import Reducer
import auth from './reducers/auth'
import main from './reducers/main'
// import initial States
import authStates from './initialStates/authStates'
import mainStates from './initialStates/mainStates'
import { useLocation, useNavigate } from 'react-router-dom'
import useParseToken from '../customhooks/useParseToken'

export const GlobalContext = createContext()

export default function ContextProvider({ children }) {
    const [authState, authDispatch] = useReducer(auth, authStates)
    const [mainState, mainDispatch] = useReducer(main, mainStates)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const parseJwt = useParseToken();

    useEffect(() => {
        console.log("authState changed")
        if (localStorage.getItem("token") === null) {
            navigate("/Admin/Auth/Login")
        } else {
            let timeNow = Math.round(Date.now() / 1000)
            let token = JSON.parse(localStorage.getItem("token"))
            let userData = parseJwt(token.refresh)

            console.log(timeNow, userData.exp)
            if (timeNow < userData.exp) {
                authDispatch({ type: "SET_USER", payload: { userData, token } })
                if (pathname === "/Admin/Auth/Login") {
                    navigate("Admin")
                } else {
                    navigate(pathname)
                }
            } else {
                navigate("/Admin/Auth/Login")
            }
        }
    }, [authState.isLoggedIn])

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