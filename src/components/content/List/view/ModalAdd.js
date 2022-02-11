
import { XIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';


import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { ListContext } from '..';
import { formTemplate } from '../../../../constant/formTemplate';

const schema = Yup.object().shape({
    nama: Yup.string().required("Nama tidak boleh kosong"),
    npm: Yup.string().required("NPM tidak boleh kosong"),
    jurusan: Yup.string().required("Jurusan tidak boleh kosong"),
    instansi: Yup.string().required("Intansi tidak boleh kosong"),
    mulai: Yup.string().required("Tanggal Mulai tidak boleh kosong"),
    akhir: Yup.string().required("Tanggal Berakhir tidak boleh kosong")
})

function ModalAdd({ closeModal }) {
    const { onModalAddSubmit } = useContext(ListContext)

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });


    return (
        <div className=" fixed center-self h-[600px] w-[500px] shadow-xl bg-gray-200 rounded-3xl overflow-hidden">
            <div className="h-10 w-10 p-7 text-cyan-800 text-lg center absolute right-0  hover:cursor-pointer " onClick={closeModal}>
                <XIcon className='h-5 w-5 text-cyan-800 font-bold ' />
            </div>
            <div className="h-full p-5 overflow-auto">
                <div id="title" className='pl-3 mb-5 text-3xl font-semibold  text-cyan-900'>
                    <h1>Tambah Mahasiswa Baru</h1>
                </div>

                <form onSubmit={handleSubmit(onModalAddSubmit)}>
                    <div className='border border-gray-300 rounded-3xl p-5'>
                        {formTemplate.map((f, i) => {
                            return (
                                <Input key={i} erros={errors[f.name]} register={register} {...f} />
                            )
                        })}

                    </div>

                    <div className='p-5 flex justify-around'>
                        <button type='submit' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>KIRIM</button>
                        <button onClick={closeModal} type='button' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>BATAL</button>
                    </div>
                </form>

            </div>
        </div>

    )
}


const Input = ({ ...props }) => {

    return (
        <div className='mb-3'>
            <label className='block pl-5 mb-2 font-semibold text-cyan-900' htmlFor={props.title}>
                {props.title}  :
            </label>
            <input
                {...props.register(props.name)}
                id={props.title}
                className="px-5 mb-1 h-[50px] w-full rounded-full border border-gray-400 outline-cyan-700"
                placeholder={props.placeholder}
                type={props.type}
            />
            <small className='error'>{props.errors?.type === 'required' && props.erroMsg}</small>
        </div>
    )
}


export default ModalAdd;
