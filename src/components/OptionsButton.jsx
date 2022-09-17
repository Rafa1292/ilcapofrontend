import React from 'react';
import '@styles/OptionsButton.scss';
import menu from '@icons/options.png';

const OptionsButton = () => {
    return (
        <div className='options-btn'>
            <img src={menu} height={60}/>
        </div>
    );
}

export default OptionsButton;