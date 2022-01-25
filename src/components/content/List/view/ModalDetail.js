import React, { useState } from 'react';

import * as Yup from "yup"
import { UserIcon, XIcon } from '@heroicons/react/solid';
import { useContext, useEffect } from 'react/cjs/react.development';
import { ListContext } from '..';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
    nama: Yup.string().required(),
    npm: Yup.string().required(),
    jurusan: Yup.string().required(),
    instansi: Yup.string().required(),
    mulai: Yup.string().required(),
    akhir: Yup.string().required()
})

function ModalDetail({ closeModal }) {
    const { listState, onModalUpdateSubmit, onDeletePeserta } = useContext(ListContext)
    const [isSubmit, setIsSubmit] = useState(false)
    const [detailNav, setDetailNav] = useState(0)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });


    useEffect(() => {
        reset(listState.listDetail)
    }, [listState.listDetail])

    return (
        <div className=" fixed center-self h-[600px] w-[1000px] shadow-xl bg-gray-200  rounded-3xl overflow-hidden z-100">
            <div className="h-10 w-10 p-7 text-cyan-800 text-lg center absolute right-0  hover:cursor-pointer " onClick={closeModal}>
                <XIcon className='h-5 w-5 text-cyan-800 font-bold' />
            </div>
            <div className="h-full p-5 flex flex-col">
                <div id="title" className='pl-3 text-3xl font-semibold  text-cyan-900 '>
                    <h1>Detail</h1>
                </div>

                <div className=" h-full flex">
                    <div className="border border-gray-300 w-[40%] bg-white rounded-l-lg p-3 ">
                        <div className="border border-gray-300 h-1/2 w-full rounded-lg text-center">
                            <UserIcon className='h-full w-full text-cyan-800 ' />
                        </div>
                        <div className=" h-1/2 center text-center gap-2 text-gray-600">
                            <p className='text-xl font-semibold '>{listState.listDetail.nama}</p>
                            <p>( {listState.listDetail.npm} )</p>
                            <p>{listState.listDetail.instansi}</p>
                            <div className='flex justify-center my-3'>
                                <div onClick={() => onDeletePeserta(listState.listDetail.id)} className="w-[90px] font-bold bg-red-700 text-white rounded-full py-2 hover:cursor-pointer hover:bg-red-800 active:bg-red-600">
                                    HAPUS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-fulll  w-[80%] ">
                        <div className=" h-[7%] flex ">
                            <div
                                onClick={() => setDetailNav(0)}
                                className={`detail-nav-style ${detailNav === 0 ? 'bg-white z-30' : 'bg-gray-300 z-20'} `}>
                                Data
                            </div>
                            <div
                                onClick={() => setDetailNav(1)}
                                className={`detail-nav-style ${detailNav === 1 ? 'bg-white z-30' : 'bg-gray-300 z-20'} `}>
                                Sertifikat
                            </div>
                            <div
                                onClick={() => setDetailNav(2)}
                                className={`detail-nav-style ${detailNav === 2 ? 'bg-white z-30' : 'bg-gray-300 z-10'}`}>
                                Akun
                            </div>
                        </div>
                        <div className="h-[93%] bg-white rounded-r-lg p-5">
                            {detailNav === 0 ?
                                <DataDetail
                                    submit={handleSubmit(onModalUpdateSubmit)}
                                    errors={errors}
                                    register={register}
                                    listState={listState}
                                    isSubmit={isSubmit}
                                    close={() => setIsSubmit(false)}
                                    closeModal={closeModal}
                                    setIsSubmit={() => setIsSubmit(true)}
                                />
                                : detailNav === 1 ?
                                    <SertifikatDetail />
                                    : <AkunDetail />

                            }
                        </div>
                    </div>


                </div>

            </div>
        </div >
    )
}

const SertifikatDetail = () => {
    return (
        <div className='h-full center'>
            sertifikat detail
        </div>
    )
}

const AkunDetail = () => {
    return (
        <div className="h-full center">
            Detail Akun
        </div>
    )
}

const DataDetail = ({ submit, errors, register, listState, isSubmit, close, closeModal, setIsSubmit }) => {
    return (
        <form onSubmit={submit} className='h-full overflow-y-auto '>
            <Input
                erroMsg="Nama Tidak boleh Kosong"
                errors={errors.nama}
                register={register}
                name="nama"
                type="text"
                placeholder="Masukkan Nama"
                title="Nama"
            />
            <Input
                erroMsg="NPM Tidak boleh Kosong"
                errors={errors.npm}
                register={register}
                name="npm"
                type="text"
                placeholder="Masukkan No Induk Mahasiswa"
                title="NPM"
            />
            <Input
                erroMsg="Jurusan Tidak boleh Kosong"
                errors={errors.jurusan}
                register={register}
                name="jurusan"
                type="text"
                placeholder="Jurusan"
                title="Jurusan"
            />
            <Input
                erroMsg="Instansi Tidak boleh Kosong"
                errors={errors.instansi}
                register={register}
                name="instansi"
                type="text"
                placeholder="Masukkan Asal Intansi"
                title="Instansi"
            />
            <Input
                erroMsg="Tanggal Mulai Tidak boleh Kosong"
                errors={errors.mulai}
                register={register}
                name="mulai"
                type="date"
                placeholder="Masukkan Tanggal Mulai Kerja Praktek"
                title="Tanggal Mulai"
            />
            <Input
                erroMsg="Tanggal Akhir Tidak boleh Kosong"
                errors={errors.akhir}
                register={register}
                name="akhir"
                type="date"
                placeholder="Masukkan Tanggal Berakhir Kerja Praktek"
                title="Tanggal Berakhir"
            />

            <div className='mb-2'>
                <label htmlFor="status" className='block pl-5 mb-2 font-semibold text-cyan-900'>status</label>
                <select id='status' {...register("status")} className='border border-gray-400 outline-cyan-700 p-3 px-5 rounded-full'>
                    <option value={true}>ACTIVE</option>
                    <option value={false}>NON-ACTIVE</option>
                </select>
            </div>

            {
                listState.updated && isSubmit &&
                <div className='border-2 border-green-300 px-5 mb-3 h-[50px] rounded-full flex items-center text-green-600 font-semibold bg-green-200  justify-between'>
                    <p>Data <span className='text-cyan-800 font-bold mx-1'>{listState.listDetail.nama}</span> berhasil di update</p>
                    <span className='hover:cursor-pointer' onClick={close}>
                        <XIcon className='h-5 w-5 text-cyan-800 font-bold' />
                    </span>
                </div>

            }
            <div className='flex justify-around'>
                <button onClick={setIsSubmit} type='submit' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>UPDATE</button>
                <button onClick={closeModal} type='button' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>BATAL</button>
            </div>
        </form>
    );
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
                onChange={props.onChange}
            />
            <small className='error'>{props.errors?.type === 'required' && props.erroMsg}</small>
        </div>
    )
}

export default ModalDetail;
