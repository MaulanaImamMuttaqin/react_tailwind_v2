import React, { useState, useContext, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import Input from '../../../reusables/Input';
import { ListContext } from '..';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup"
import { SertifikatDetailformTemplate } from '../../../../constant/formTemplate';

const sertifikatSchema = Yup.object().shape({
    nama: Yup.string().required("Nama tidak boleh kosong"),
    npm: Yup.string().required("NPM tidak boleh kosong"),
    jurusan: Yup.string().required("Jurusan tidak boleh kosong"),
    instansi: Yup.string().required("Intansi tidak boleh kosong"),
    mulai: Yup.string().required("Tanggal Mulai tidak boleh kosong"),
    akhir: Yup.string().required("Tanggal Berakhir tidak boleh kosong"),
    ttl: Yup.string().required("Tempat Tanggal lahirtidak boleh kosong"),
    manager: Yup.string().required("Nama Manager tidak boleh kosong"),
    alamat: Yup.string().required("Alamat tidak boleh kosong"),
    tempat: Yup.string().required("Tempat Tertanda tidak boleh kosong")
})

const SertifikatDetail = ({ closeModal }) => {
    const { listState, onDownloadSertifikat } = useContext(ListContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(sertifikatSchema), });
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        reset({
            ...listState.listDetail,
            manager: "HENDRIX REZA"
        })
    }, [listState.listDetail])

    return (
        <form onSubmit={handleSubmit(onDownloadSertifikat)} className='h-full overflow-y-auto py-5'>
            {SertifikatDetailformTemplate.map((f, i) => {
                return (
                    <Input key={i} errors={errors[f.name]} register={register} {...f} />
                )
            })}

            {
                listState.updated && isSubmit &&
                <div className='border-2 border-green-300 px-5 mb-3 h-[50px] rounded-full flex items-center text-green-600 font-semibold bg-green-200  justify-between'>
                    <p>Data <span className='text-cyan-800 font-bold mx-1'>{listState.listDetail.nama}</span> berhasil di update</p>
                    <span className='hover:cursor-pointer' onClick={() => setIsSubmit(false)}>
                        <XIcon className='h-5 w-5 text-cyan-800 font-bold' />
                    </span>
                </div>

            }
            <div className='flex justify-around mt-10'>
                <button onClick={setIsSubmit} type='submit' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>CETAK SERTIFIKAT</button>
                <button onClick={closeModal} type='button' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>BATAL</button>
            </div>
        </form>
    );
}

export default SertifikatDetail;
