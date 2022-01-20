
import { XIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { GlobalContext } from '../../../../context/Provider';


import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

const schema = Yup.object().shape({
    nama: Yup.string().required(),
    npm: Yup.string().required(),
    jurusan: Yup.string().required(),
    instansi: Yup.string().required(),
    mulai: Yup.string().required(),
    akhir: Yup.string().required()
})

function ModalAdd() {

    const { listDispatch } = useContext(GlobalContext)

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });


    const closeAdd = () => {
        listDispatch({ type: "CLOSE_ADD" })
    }

    const onSubmitHandler = (data) => {
        console.log(data)
        reset()

    }
    return (
        <div className=" fixed center-self h-[600px] w-[500px] shadow-xl bg-white rounded-3xl overflow-hidden">
            <div className="h-10 w-10 p-7 text-cyan-800 text-lg center absolute right-0  hover:cursor-pointer " onClick={() => closeAdd()}>
                <XIcon className='h-5 w-5 text-cyan-800 font-bold ' />
            </div>
            <div className="h-full p-5 overflow-auto">
                <div id="title" className='pl-3 mb-5 text-3xl font-semibold  text-cyan-900'>
                    <h1>Tambah Mahasiswa Baru</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className='border border-gray-300 rounded-3xl p-5'>
                        <Input register={register} name="nama" type="text" placeholder="Masukkan Nama" title="Nama" />
                        <Input register={register} name="npm" type="text" placeholder="Masukkan No Induk Mahasiswa" title="NPM" />
                        <Input register={register} name="jurusan" type="text" placeholder="Jurusan" title="Jurusan" />
                        <Input register={register} name="instansi" type="text" placeholder="Masukkan Asal Intansi" title="Instansi" />
                        <Input register={register} name="mulai" type="date" placeholder="Masukkan Tanggal Mulai Kerja Praktek" title="Tanggal Mulai" />
                        <Input register={register} name="akhir" type="date" placeholder="Masukkan Tanggal Berakhir Kerja Praktek" title="Tanggal Berakhir" />
                    </div>

                    <div className='p-5 flex justify-around'>
                        <button type='submit' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>KIRIM</button>
                        <button className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>BATAL</button>
                    </div>
                </form>

            </div>
        </div>

    )
}


const Input = ({ ...props }) => {

    return (
        <div className='mb-1'>
            <label className='block pl-5 mb-2 font-semibold text-cyan-900' htmlFor={props.title}>
                {props.title}  :
            </label>
            <input
                {...props.register(props.name)}
                id={props.title}
                className="px-5 mb-3 h-[50px] w-full rounded-full border border-gray-400 outline-cyan-700"
                placeholder={props.placeholder}
                type={props.type}
            />
        </div>
    )
}
export default ModalAdd;
