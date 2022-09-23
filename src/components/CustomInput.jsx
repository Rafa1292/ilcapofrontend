import React, { useState } from 'react';
import '@styles/CustomInput.scss'
const CustomInput = ({ buttonType, message, isValid }) => {
    const [showAlert, setShowAlert] = useState(!isValid); 

    return (
        <div className='custom-input'>
            <input onKeyDown={()=> setShowAlert(false)} className={showAlert ? 'alert-state' : ''} type={buttonType} />
            {
                showAlert &&
                <span>
                    {
                        message
                    }
                </span>
            }
        </div>
    );
}

export default CustomInput;