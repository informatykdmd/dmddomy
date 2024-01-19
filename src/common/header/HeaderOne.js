import React from 'react';
import TopOne from './TopOne';
import NavOne from './NavOne';

const HeaderOne = () => {
    return(
        <>
        <header className="ploting-header">
            <TopOne />
            
            <NavOne />
        </header>
        </>
    )
}

export default HeaderOne;