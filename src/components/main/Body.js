import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Provider';
import List from '../content/List';

function Body() {
    const {
        mainState: {
            sideBarIsOpen
        }
    } = useContext(GlobalContext)
    return <div className={`h-full ${!sideBarIsOpen ? 'w-[93%]' : 'w-[80%]'}   transition-all duration-300 ease-in-out p-2`}>
        <List />
    </div>;
}

export default Body;
