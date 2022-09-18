import React from 'react';
import wapp from '@icons/wapp.png';
import face from '@icons/face.png';
import facename from '@icons/facename.png';
import insta from '@icons/insta.png';

const Contact = () => {
    return (
        <div className='col-10 d-flex center' style={{
            placeItems: 'center',
            background: '#940b04', height: '35px',
            position: 'fixed', top: '0'
        }}>
            <img style={{ opacity: '0.8' }} className='mx-1' src={wapp} height={25} />

            <span>
                <img style={{ opacity: '0.7', marginRight: '5px' }} className='' src={face} height={20} />
                <img style={{ opacity: '0.7' }} className='' src={facename} height={20} />
            </span>
            <img style={{ opacity: '0.7' }} className='mx-1' src={insta} height={20} />
        </div>
    );
}

export default Contact;