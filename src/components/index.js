import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { BASE_URL } from '../constant/constants';
import { GlobalContext } from '../context/Provider';
import useParseToken from '../customhooks/useParseToken';
import Body from './main/Body';
import SideBar from './main/SideBar';

function Components() {
    const {
        authState: {
            userData,
            token
        },
        authDispatch
    } = useContext(GlobalContext)

    const parseJwt = useParseToken()

    useEffect(() => {
        console.log("count down started")
        let interval = setInterval(() => {
            console.log("refresh")
            let formData = new FormData();
            formData.append('refresh', token.refresh)
            axios.post(`${BASE_URL}/auth/token/refresh/`, formData)
                .then(res => {
                    console.log(res.data)
                    let userData = parseJwt(res.data.refresh)
                    localStorage.setItem("token", JSON.stringify(res.data))
                    authDispatch({ type: "SET_USER", payload: { userData, token: res.data } })
                })
                .catch(err => {
                    console.log(err)
                })
        }, 360000)
        return () => {
            clearInterval(interval)
        };
    }, []);

    return (

        <div className='h-screen w-screen bg-gradient-to-tr from-cyan-900 to-cyan-700 flex'>
            <SideBar />
            <Body />
        </div>
    );
}

export default Components;
