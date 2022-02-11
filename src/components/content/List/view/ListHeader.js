import { DownloadIcon, RefreshIcon, UploadIcon, UserAddIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { ListContext } from '..';
import ModalAdd from './ModalAdd';
import ModalDetail from './ModalDetail';
import ModalUpload from './ModalUpload';

function ListHeader() {

    const { listState, listDispatch, onDownloadExcel } = useContext(ListContext)

    const ModalAddController = (state) => {
        listDispatch({ type: state + "_ADD" })
    }

    const ModalUploadController = (state) => {
        listDispatch({ type: state + "_UP" })
    }

    const ModalDetailController = (state) => {
        listDispatch({ type: state + "_DETAIL" })
    }

    const refetchData = () => {
        listDispatch({ type: "REFETCH" })
    }
    return (
        <div className='h-2/6'>
            {listState.modalAddIsOpen && <ModalAdd closeModal={() => ModalAddController("CLOSE")} />}
            {listState.modalUploadIsOpen && <ModalUpload closeModal={() => ModalUploadController("CLOSE")} />}
            {listState.modalDetailIsOpen && <ModalDetail closeModal={() => ModalDetailController("CLOSE")} />}
            <div className=" h-[70px] pl-5 flex items-center">
                <div className=" text-2xl font-bold px-7 rounded-full w-[500px] bg-cyan-800 text-white p-1">
                    <h1 className="">Daftar Peserta</h1>
                </div>
            </div>
            <div className=" flex justify-end text-xl text-cyan-800 mb-1 px-12 border border-gray-400 mx-12 rounded-full py-2 ">
                <span
                    className="tool-menu-styles "
                    onClick={() => onDownloadExcel()}
                >
                    <DownloadIcon id="icon" className='h-5 w-5 text-cyan-800 ' />
                </span>
                <span
                    className="tool-menu-styles "
                    onClick={() => refetchData()}
                >
                    <RefreshIcon id="icon" className='h-5 w-5 text-cyan-800 ' />
                </span>

                <span
                    className="tool-menu-styles "
                    onClick={() => ModalAddController("OPEN")}
                >
                    <UserAddIcon id="icon" className='h-5 w-5 text-cyan-800 ' />
                </span>
                <span
                    className="tool-menu-styles"
                    onClick={() => ModalUploadController("OPEN")}
                >
                    <UploadIcon id="icon" className='h-5 w-5 text-cyan-800 ' />
                </span>

            </div>
            {/* <div className=" h-4/6 p-2 grid grid-cols-3">
                <div className=" p-2 flex">
                    <div className=" rounded-3xl bg-cyan-700 flex-1"></div>
                </div>
                <div className=" p-2 flex">
                    <div className=" rounded-3xl bg-cyan-700 flex-1"></div>
                </div>
                <div className=" p-2 flex">
                    <div className=" rounded-3xl bg-cyan-700 flex-1"></div>
                </div>
            </div> */}
        </div>
    );
}

export default ListHeader;
