import { UploadIcon, UserAddIcon } from '@heroicons/react/solid';
import React, { useContext, useReducer } from 'react';
import { GlobalContext } from '../../../../context/Provider';
import ModalAdd from './ModalAdd';

function RenderList() {
    const [listState, listDispatch] = useReducer(list, listStates)

    const openAdd = () => {
        listDispatch({ type: "OPEN_ADD" })
    }
    const openUpload = () => {
        listDispatch({ type: "OPEN_UP" })
    }
    console.log(lists)
    return (



        //         { modalAddIsOpen && <ModalAdd />}
        // { modalUploadIsOpen && <ModalUpload /> }
        <div className=" h-5/6  border-t border-gray-400 pt-5 px-12">
            <div className=" flex justify-end text-xl text-cyan-800 mb-1">
                <span id className="mr-2 hover:bg-cyan-500 p-2 rounded-full hover:cursor-pointer " onClick={() => openAdd()} ><UserAddIcon className='h-5 w-5 text-cyan-800 ' /></span>
                <span className="mr-5 hover:bg-cyan-500 p-2 rounded-full hover:cursor-pointer" onClick={() => openUpload()}><UploadIcon className='h-5 w-5 text-cyan-800 ' /></span>
            </div>
            <div className="">
                <table className="w-full">
                    <thead className="border-b border-black h-10">
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>NPM</th>
                            <th>Jurusan </th>
                            <th>Tanggal Mulai </th>
                            <th>Tanggal Berakhir</th>
                            <th>Instansi</th>
                            <th>Status</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            lists.map((l, i) => {
                                return (
                                    <tr key={i} className="border-b border-gray-400 h-10 ">
                                        <td>{i}</td>
                                        <td>{l.nama}</td>
                                        <td>{l.npm}</td>
                                        <td>{l.jurusan}</td>
                                        <td>{l.tgl_mulai} </td>
                                        <td>{l.tgl_selesai}</td>
                                        <td>{l.instansi}</td>
                                        <td>{l.status}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default RenderList;
