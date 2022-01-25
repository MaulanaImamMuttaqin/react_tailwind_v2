import React from 'react';
import ListHeader from './ListHeader';

import RenderList from './RenderList';

function ListContainer() {
    return (
        <div className='h-full w-full bg-white rounded-lg flex flex-col overflow-hidden'>
            <ListHeader />
            <RenderList />
        </div>

    );
}

export default ListContainer;
