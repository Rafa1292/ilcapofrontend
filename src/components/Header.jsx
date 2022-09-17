import React, {useState} from 'react';
import '@styles/Header.scss';
import cart from '@icons/box.png';
import openCart from '@icons/openbox.png';
import user from '@icons/userwhite.png';
import logoblack from '@logos/ilcapoblack.png';


const Header = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);

	return (
		<div className='header-container'>
			<img src={user} className='header-user'/>
			<img src={logoblack} className='header-logo'/>
			<img onClick={()=> setCartIsOpen(!cartIsOpen)} src={cartIsOpen? openCart : cart} className='header-cart'/>
		</div>
	);
}

export default Header;
