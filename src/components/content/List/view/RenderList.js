
import React, { useContext } from 'react';
import { ListContext } from '..';
// import { GlobalContext } from '../../../../context/Provider';

// import ModalAdd from './ModalAdd';

function RenderList() {
    const { listState, listDispatch } = useContext(ListContext)


    const ModalDetailController = (state) => {
        listDispatch({ type: state + "_DETAIL" })
    }


    const isOdd = (num) => {
        return num % 2 !== 0
    }

    const RowOnClick = (data) => {
        ModalDetailController("OPEN")
        listDispatch({ type: "DETAIL", payload: data })
    }
    return (


        <div className=" h-5/6  pt-2 px-12">

            {listState.loading ? <div className='center'>

                <p>loading</p>
            </div> :
                <div className="h-[500px] overflow-auto">
                    <table className="w-full">
                        <thead className="">
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

                        <tbody className=''>
                            {
                                listState.lists.map((l, i) => {
                                    return (
                                        <tr onClick={() => RowOnClick(l)} key={i} className={`h-10 ${isOdd(i) && 'bg-gray-300'} text-gray-700 transition-all ease-in-out duration-200 hover:h-14 hover:text-gray-200 hover:cursor-pointer hover:bg-gray-400`}>
                                            <td>{i + 1}</td>
                                            <td>{l.nama}</td>
                                            <td>{l.npm}</td>
                                            <td>{l.jurusan}</td>
                                            <td>{l.mulai} </td>
                                            <td>{l.akhir}</td>
                                            <td>{l.instansi}</td>
                                            <td>
                                                <span className={`rounded-full text-white text-xs p-2 font-semibold ${l.status ? 'bg-green-500' : "bg-red-500"}`}>
                                                    {l.status ? "ACTIVE" : "NOT ACTIVE"}
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>

            }
        </div >
    )
}

export default RenderList;
