import React, { useContext, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ListContext } from '..';
import { useForm } from 'react-hook-form';
import * as Yup from "yup"
import Input from '../../../reusables/Input';
import { XIcon } from '@heroicons/react/solid';
import { AccountDetailFormTemplate } from '../../../../constant/formTemplate';

const schema = Yup.object().shape({
    username: Yup.string().required("Username tidak boleh kosong"),
    password: Yup.string().required("Password tidak boleh kosong").min(8, "Minimal 8 karakter"),
    password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords Harus Sesuai')
})


function AccountDetail({ closeModal }) {

    const { listState, onCreateParticipantAcccount } = useContext(ListContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });
    const [isSubmit, setIsSubmit] = useState(false)
    const username = listState.listDetail.nama
    const start_at = listState.listDetail.mulai.split("-")
    const finish_at = listState.listDetail.mulai.split("-")
    const epoch_start = new Date(parseInt(start_at[0]), parseInt(start_at[1]) - 1, parseInt(start_at[2]))
    const epoch_finish = new Date(parseInt(finish_at[0]), parseInt(finish_at[1]) - 1, parseInt(finish_at[2]))
    const addtionalData = {
        first_name: username.split(" ").slice(0, 1).join(" "),
        last_name: username.split(" ").slice(1, username.split(" ").length).join(" "),
        start_at: epoch_start.getTime() / 1000,
        finish_at: epoch_finish.getTime() / 1000
    }
    console.log(listState.listDetail)
    console.log(epoch_start, epoch_start.getTime() / 1000)
    useEffect(() => {
        reset({
            username: username.replace(/ /g, '')
        })
    }, [listState.listDetail])




    return <form onSubmit={handleSubmit((data) => onCreateParticipantAcccount(data, addtionalData))} className='h-full overflow-y-auto py-5'>

        {AccountDetailFormTemplate.map((f, i) => {
            return (<Input errors={errors[f.name]} register={register} key={i} {...f} />)
        })}



        {listState.updated && isSubmit &&
            <div className='border-2 border-green-300 px-5 mb-3 h-[50px] rounded-full flex items-center text-green-600 font-semibold bg-green-200  justify-between'>
                <p>Data <span className='text-cyan-800 font-bold mx-1'>{listState.listDetail.nama}</span> berhasil di update</p>
                <span className='hover:cursor-pointer' onClick={() => setIsSubmit(false)}>
                    <XIcon className='h-5 w-5 text-cyan-800 font-bold' />
                </span>
            </div>
        }

        <div className='flex justify-around mt-10'>
            <button onClick={setIsSubmit} type='submit' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>BUAT AKUN</button>
            <button onClick={closeModal} type='button' className='w-1/3 h-[50px] rounded-full bg-cyan-800 font-semibold hover:bg-cyan-700 active:bg-cyan-900  text-white'>BATAL</button>
        </div>
    </form>
}

export default AccountDetail;
