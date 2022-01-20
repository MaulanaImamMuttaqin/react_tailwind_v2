import { XIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';

function ModalBox({ children, ...props }) {


    return (
        <div className=" fixed center-self h-[500px] w-[700px] shadow-xl bg-white rounded-3xl overflow-hidden">
            <div className="h-10 w-10 text-cyan-800 text-lg center absolute border border-black right-0" {...props}>
                <XIcon className='h-5 w-5 text-cyan-800 font-bold' />
            </div>
            <div className='h-full'>
                {children}
            </div>
        </div>
    )
}

export default ModalBox;
