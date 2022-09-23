import React, { useState } from 'react';
import '@styles/CustomSelect.scss'
import arrowDown from '@icons/arrowDown.png';

const CustomSelect = ({ children, value, defaultLabel }) => {
    const [showOptions, setShowOptions] = useState(false);
    const label = defaultLabel != null ? defaultLabel : "Seleccione una opcion";
    return (
        <div className='custom-select d-flex'>
            <div className='custom-select_value' onClick={() => setShowOptions(!showOptions)}>
                {
                    
                    value == null ? label : value
                }
            </div>
            <div className='custom-select_arrow center content-center d-flex'>
                <img onClick={() => setShowOptions(!showOptions)}
                    src={arrowDown} height='15'
                    className={showOptions ? 'rotate' : ''} />
            </div>
            <div onClick={()=> setShowOptions(!showOptions)} className={`options-content ${showOptions? 'options-content-open' : ''} `}>
                {children}
            </div>
        </div>
    );
}

export default CustomSelect;