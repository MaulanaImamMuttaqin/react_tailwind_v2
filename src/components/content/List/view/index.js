import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { GlobalContext } from '../../../../context/Provider';
import ListHeader from './ListHeader';
import ModalAdd from './ModalAdd';
import ModalUpload from './ModalUpload';
import RenderList from './RenderList';

function ListContainer() {
    const {
        listState: {
            modalAddIsOpen,
            modalUploadIsOpen
        }
    } = useContext(GlobalContext)
    return (
        <div className='h-full w-full bg-white rounded-lg flex flex-col overflow-hidden'>
            <ListHeader />
            <RenderList />
        </div>

    );
}

export default ListContainer;
