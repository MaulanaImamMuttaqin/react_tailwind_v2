import React, { useState, useContext, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import Input from '../../../reusables/Input';
import { ListContext } from '..';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as Yup from "yup"

const schema = Yup.object().shape({
    nama: Yup.string().required(),
    npm: Yup.string().required(),
    jurusan: Yup.string().required(),
    instansi: Yup.string().required(),
    mulai: Yup.string().required(),
    akhir: Yup.string().required()
})


const DataDetail = ({ closeModal }) => {

    const { listState, onModalUpdateSubmit } = useContext(ListContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        reset(listState.listDetail)
    }, [listState.listDetail])

    return (
        <form onSubmit={handleSubmit(onModalUpdateSubmit)} className='h-full overflow-y-auto '>
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
                    <span className='hover:cursor-pointer' onClick={() => setIsSubmit(false)}>
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

export default DataDetail;
