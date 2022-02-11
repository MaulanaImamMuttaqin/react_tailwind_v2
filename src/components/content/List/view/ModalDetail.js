import React, { useState, useContext, useEffect } from 'react';

import * as Yup from "yup"
import { UserIcon, XIcon } from '@heroicons/react/solid';
import { ListContext } from '..';
import { schemaShape } from '../../../../constant/constants';
import SertifikatDetail from './SertifikatDetail';
import DataDetail from './DataDetail';
import AccountDetail from './AccountDetail';



const schema = Yup.object().shape({
    nama: Yup.string().required(),
    npm: Yup.string().required(),
    jurusan: Yup.string().required(),
    instansi: Yup.string().required(),
    mulai: Yup.string().required(),
    akhir: Yup.string().required()
})

function ModalDetail({ closeModal }) {
    const { listState, onDeletePeserta } = useContext(ListContext)

    const [detailNav, setDetailNav] = useState(0)



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
                                    closeModal={closeModal}
                                />
                                : detailNav === 1 ?
                                    <SertifikatDetail
                                        closeModal={closeModal}
                                    />
                                    : <AccountDetail closeModal={closeModal} />

                            }
                        </div>
                    </div>


                </div>

            </div>
        </div >
    )
}










export default ModalDetail;
