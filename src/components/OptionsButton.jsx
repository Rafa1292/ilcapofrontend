import React from 'react';
import '@styles/OptionsButton.scss';
import menu from '@icons/options.png';

const OptionsButton = ({openNavbar}) => {
    return (
        <div className='options-btn' onClick={()=> openNavbar()}>
            <img src={menu} height={60}/>
        </div>
    );
}

export default OptionsButton;