
import { XIcon, UploadIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { upload } from '@testing-library/user-event/dist/upload';
import { useContext } from 'react/cjs/react.development';
import { ListContext } from '..';


const schema = yup.object().shape({
    file: yup.mixed()
        .test('required', "You need to provide a file", (value) => {
            return value && value.length
        })
        .test("fileSize", "The file is too large", (value, context) => {
            return value && value[0] && value[0].size <= 200000;
        })
        .test("type", "Please insert .csv or .xlsx file", function (value) {
            return value && value[0] && ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(value[0].type);
        }),
})

function ModalUpload({ closeModal }) {
    const { onModalUploadSubmit } = useContext(ListContext)
    const [uploaded, setUploaded] = useState([false, ""])
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) })


    const onChangeFile = (e) => {
        setUploaded([true, e.target.files[0].name])
        console.log(e.target && e.target.files[0].name)
    }
    return (
        <div className="fixed center-self h-[400px] w-[500px] shadow-xl bg-gray-200  rounded-3xl overflow-hidden">
            <div className="h-10 w-10 text-cyan-800 text-lg center absolute right-0 hover:cursor-pointer" onClick={closeModal}>
                <XIcon className='h-5 w-5 text-cyan-800 font-bold' />
            </div>
            <div className='h-full p-7 '>
                <form onSubmit={handleSubmit(onModalUploadSubmit)} className=' h-full flex flex-col justify-center items-center gap-1 border border-gray-300 rounded-3xl'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <label htmlFor="file" className="border-dashed border-4 border-gray-400 rounded-xl h-40 w-40 flex flex-col justify-center items-center hover:cursor-pointer">
                            <UploadIcon className='h-20 w-20 text-cyan-800  mb-3 ' />
                            <p className=' text-xs font-semibold text-gray-500'>Upload File, (.csv, .xlsx)</p>
                        </label>
                        {errors.file && <small className='text-red-600'>{errors.file.message}</small>}
                        {uploaded[0] && <p className='font-bold text-cyan-800'>Uploaded : {uploaded[1]}</p>}
                        <input {...register("file")} id='file' type="file" className="block h-0 w-0" onChange={(e) => onChangeFile(e)} />
                    </div>

                    <button type='submit' className='w-[150px] h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>UPLOAD</button>
                </form>

            </div >


        </div >

    )
}



export default ModalUpload;
