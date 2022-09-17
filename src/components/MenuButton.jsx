import React from 'react';
import '@styles/MenuBtn.scss';
import menu from '@icons/menu.png';

const MenuButton = () => {
    return (
        <div className='menu-btn'>
            <img src={menu} height={80}/>
        </div>
    );
}

export default MenuButton;