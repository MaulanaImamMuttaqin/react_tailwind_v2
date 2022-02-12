import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/Provider';
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from '../../constant/constants';
import useParseToken from '../../customhooks/useParseToken';

const schemaShape = {
    username: Yup.string().required(),
    password: Yup.string().required(),
}
const schema = Yup.object().shape(schemaShape)

function Login() {

    const { authDispatch } = useContext(GlobalContext)
    const [isLoading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });
    const [invalid, setInvalid] = useState(false)

    const parseJwt = useParseToken();

    const login = (data) => {
        setLoading(true)
        console.log("fetching")
        axios.post(`${BASE_URL}/auth/token/obtain/`, data)
            .then(res => {

                let userData = parseJwt(res.data.refresh)
                console.log(res.data)
                console.log(userData)
                if (userData.role_id === 1) {
                    console.log(res.data)
                    setLoading(false)
                    localStorage.setItem("token", JSON.stringify(res.data))
                    authDispatch({ type: "LOGIN" })
                } else {
                    setInvalid(true)
                    setLoading(false)
                }
            })
            .catch(err => {
                console.log(err)
                setInvalid(true)
                setLoading(false)
            })
    }
    return (
        <div>
            <div className="h-screen w-screen bg-[url('./assets/images/up3.jpeg')] bg-cover blur-sm absolute -z-10"></div>
            <div className="h-screen grid place-content-center bg-none ">
                <div id="box"
                    className="h-[500px] w-[900px] shadow-lg grid bg-gray-200 rounded-tl-3xl rounded-br-3xl grid-cols-5 overflow-hidden">
                    <div
                        className=" col-span-3 center border-r border-gray-300 bg-gradient-to-tr from-cyan-900 via-cyan-700 to-yellow-300 gap-2">
                        <h1 className="text-6xl text-yellow-500 font-bold">PLN</h1>
                        <h1 className="text-6xl text-gray-200 font-bold">UP2D</h1>
                        <h1 className="text-2xl text-gray-200 font-bold">(<span className="text-yellow-500">U</span>nit <span
                            className="text-yellow-500">P</span>elaksana <span className="text-yellow-500">P</span>engatur <span
                                className="text-yellow-500">D</span>istribusi)</h1>
                        <h1 className="text-2xl text-gray-200 font-bold">Aceh</h1>
                    </div>
                    <div className=" col-span-2 center border flex flex-col gap-5 ">
                        <div className='text-3xl font-semibold text-cyan-800 text-center'>
                            <h1>LOGIN</h1>
                        </div>
                        <form onSubmit={handleSubmit(login)} className=" center ">
                            <input type="text"
                                {...register("username")}
                                className="pl-5 mb-3 h-[50px] w-[300px] rounded-full border border-gray-400 outline-cyan-700 "
                                placeholder="Username" />
                            <input type="password"
                                {...register("password")}
                                className="pl-5 mb-3 h-[50px] w-[300px] rounded-full border border-gray-400 outline-cyan-700"
                                placeholder="Password" />
                            <button
                                type='submit'
                                className="bg-cyan-800 mb-3 h-[50px] w-[300px] rounded-full  font-bold text-white hover:bg-cyan-700 active:bg-cyan-900">LOGIN</button>
                            <p className="text-center">{isLoading && "Loading"}</p>
                            {invalid && !isLoading && <div id="error" className='flex flex-col items-center'>
                                <small className='text-red-500'>Username atau Password salah </small>
                                <small className='text-red-500'>atau tidak terdaftar sebagai admin</small>
                            </div>}
                            <p className="text-center">Masuk sebagai <span className="text-blue-800 font-bold">Admin</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;
