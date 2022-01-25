import React, { useContext } from 'react';
import { HomeIcon, ViewListIcon, UserIcon, CogIcon, LogoutIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { GlobalContext } from '../../context/Provider';
import { useNavigate, useLocation } from 'react-router-dom'

function SideBar() {
    const {
        mainState: {
            sideBarIsOpen
        },
        mainDispatch
    } = useContext(GlobalContext)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const location = pathname.split("/")[1]
    const NavigateTo = (params) => {
        navigate(params)
    }


    const toggle = () => {
        mainDispatch({ type: "TOGGLE" })
    }
    return <div id="navbar" className={`h-full  ${!sideBarIsOpen ? 'w-[5%]' : 'w-[16%]'}  transition-all duration-300 ease-in-out flex items-center`}>

        <div className='h-3/6 w-full flex flex-col justify-around items-center overflow-hidden  py-2'>
            <ItemMenu
                name="Home"
                highLight={!location}
                Navigate={() => NavigateTo('/')}
            >
                <HomeIcon className='text-white h-5 w-5 ' />
            </ItemMenu>

            <ItemMenu
                name="Daftar Mahasiswa"
                Navigate={() => NavigateTo('/Lists')}
                highLight={location === 'Lists'}
            >
                <ViewListIcon className='text-white h-5 w-5 ' />
            </ItemMenu>

            <ItemMenu
                name="Akun"
                Navigate={() => NavigateTo('/Users')}
                highLight={location === 'Users'}
            >
                <UserIcon className='text-white h-5 w-5 ' />
            </ItemMenu>

            <ItemMenu
                name="Pengaturan"
                Navigate={() => NavigateTo('/Settings')}
                highLight={location === 'Settings'}
            >
                <CogIcon className='text-white h-5 w-5 ' />
            </ItemMenu>

            <ItemMenu
                name="Log Out"
                Navigate={() => NavigateTo('/')}
                highLight={false}
            >
                <LogoutIcon className='text-white h-5 w-5 ' />
            </ItemMenu>
        </div>

        <div
            onClick={() => toggle()}
            className={`absolute ${!sideBarIsOpen ? 'translate-x-16' : 'translate-x-52 rotate-180'} h-14 w-14  transition-all duration-300 center rounded-full font-bold text-3xl text-cyan-500 hover:cursor-pointer`}>
            <ChevronRightIcon className='text-cyan-500 h-12 w-12' />
        </div>

    </div>
}

const ItemMenu = ({ Navigate, highLight, children, name }) => {
    return (
        <div
            className={`side-bar-menu-styles ${highLight && 'active text-cyan-800'}`}
            onClick={Navigate}>
            <div>
                <div className={`side-bar-logo-styles`}>
                    {children}

                </div>
            </div>
            <span id="nav-title" className={`side-bar-logo-title ${!highLight && 'text-white'}`}>{name}</span>
        </div>
    )
}

export default SideBar;
