import React, { useContext } from 'react';
import { HomeIcon, ViewListIcon, UserIcon, CogIcon, LogoutIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { GlobalContext } from '../../context/Provider';

function SideBar() {
    const {
        mainState: {
            sideBarIsOpen
        },
        mainDispatch
    } = useContext(GlobalContext)
    console.log("sidebar  is rendering")
    const toggle = () => {
        mainDispatch({ type: "TOGGLE" })
    }
    return <div id="navbar" className={`h-full  ${!sideBarIsOpen ? 'w-[7%]' : 'w-[20%]'}  transition-all duration-300 ease-in-out flex items-center`}>

        <div className='h-5/6 w-full flex flex-col justify-around items-center p-3'>
            <div
                className="flex items-center relative w-full overflow-hidden hover:bg-cyan-900 hover:cursor-pointer transition duration-300 ease-in-out">
                <div>
                    <div className="side-bar-logo-styles">
                        <HomeIcon className='text-white h-8 w-8' />
                    </div>
                </div>
                <span id="nav-title" className="side-bar-logo-title">Dashboard</span>
            </div>
            <div
                className="flex items-center relative w-full overflow-hidden hover:bg-cyan-900 hover:cursor-pointer transition duration-300 ease-in-out">
                <div>
                    <div className="side-bar-logo-styles">
                        <ViewListIcon className='text-white h-8 w-8' />

                    </div>
                </div>
                <span id="nav-title" className="side-bar-logo-title">Daftar
                    Mahasiswa</span>
            </div>
            <div
                className="flex items-center relative w-full overflow-hidden hover:bg-cyan-900 hover:cursor-pointer transition duration-300 ease-in-out">
                <div>
                    <div className="side-bar-logo-styles">
                        <UserIcon className='text-white h-8 w-8' />
                    </div>
                </div>
                <span id="nav-title" className="side-bar-logo-title">Akun</span>
            </div>
            <div
                className="flex items-center relative w-full overflow-hidden hover:bg-cyan-900 hover:cursor-pointer transition duration-300 ease-in-out">
                <div>
                    <div className="side-bar-logo-styles">
                        <CogIcon className='text-white h-8 w-8' />
                    </div>
                </div>
                <span id="nav-title" className="side-bar-logo-title">Pengaturan</span>
            </div>
            <div
                className="flex items-center relative w-full overflow-hidden hover:bg-cyan-900 hover:cursor-pointer transition duration-300 ease-in-out">
                <div>
                    <div className="side-bar-logo-styles">
                        <LogoutIcon className='text-white h-8 w-8' />
                    </div>
                </div>
                <span id="nav-title" className="side-bar-logo-title">Log Out</span>
            </div>

        </div>

        <div
            onClick={() => toggle()}
            className={`absolute ${!sideBarIsOpen ? 'translate-x-24' : 'translate-x-72 rotate-180'} h-14 w-14  transition-all duration-300 center rounded-full font-bold text-3xl text-cyan-800 hover:cursor-pointer`}>
            <ChevronRightIcon className='text-cyan-800 h-12 w-12' />
        </div>

    </div>
}

export default SideBar;
