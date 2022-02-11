import React, { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../context/Provider';
import Dashboard from '../content/Dashboard';
import List from '../content/List';
import Settings from '../content/Settings';
import Users from '../content/Users';

function Body() {
    const {
        mainState: {
            sideBarIsOpen
        }
    } = useContext(GlobalContext)
    const location = useLocation()

    return <div className={`h-full ${!sideBarIsOpen ? 'w-[95%]' : 'w-[84%]'}   transition-all duration-300 ease-in-out  p-2 pl-0`}>
        <div className='h-full w-full bg-white rounded-xl'>
            <Routes location={location} key={location.pathname}>
                <Route path='Lists' element={<List />} />
                <Route path='Settings' element={<Settings />} />
                <Route path='Users' element={<Users />} />
                <Route path='' element={<Dashboard />} />
            </Routes>
        </div>
    </div>;
}

export default Body;
