import React from 'react';
import '@styles/Navbar.scss';
import close from '@icons/whiteClose.png'

const Navbar = ({ isOpenNavbar, openNavbar }) => {
    return (
        <div  className={`flex-wrap navbar ${isOpenNavbar ? 'openNavbar' : ''}`}>
            <div className="navbar-content">
                <img onClick={openNavbar} className='close-icon' src={close} height={30}/>
            </div>
            <div onClick={openNavbar} className="navbar-backdrop"></div>
        </div>
    );
}

export default Navbar;