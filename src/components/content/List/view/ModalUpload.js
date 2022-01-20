
import { XIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { GlobalContext } from '../../../../context/Provider';

function ModalUpload() {

    const { listDispatch } = useContext(GlobalContext)

    const closeUpload = () => {
        listDispatch({ type: "CLOSE_UP" })
    }
    return (
        <div className=" fixed center-self h-[600px] w-[900px] shadow-xl bg-white rounded-3xl overflow-hidden">
            <div className="h-10 w-10 text-cyan-800 text-lg center absolute right-0" onClick={() => closeUpload()}>
                <XIcon className='h-5 w-5 text-cyan-800 font-bold' />
            </div>
            <div className="h-full center">
                Upload excel
            </div>
        </div>

    )
}

export default ModalUpload;
