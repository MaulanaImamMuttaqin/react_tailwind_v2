import React from 'react';

function ListHeader() {
    return (
        <div className='h-3/6'>
            <div className=" h-[70px] pl-5 flex items-center">
                <div className=" text-2xl font-bold px-7 rounded-full w-[500px] bg-cyan-800 text-white p-1">
                    <h1 className="">Daftar Mahasiswa</h1>
                </div>
            </div>
            <div className=" h-4/6 p-2 grid grid-cols-3">
                <div className=" p-2 flex">
                    <div className=" rounded-3xl bg-cyan-700 flex-1"></div>
                </div>
                <div className=" p-2 flex">
                    <div className=" rounded-3xl bg-cyan-700 flex-1"></div>
                </div>
                <div className=" p-2 flex">
                    <div className=" rounded-3xl bg-cyan-700 flex-1"></div>
                </div>
            </div>
        </div>
    );
}

export default ListHeader;
