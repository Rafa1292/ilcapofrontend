import React, { useState } from 'react';
import '@styles/Header.scss';
import cart from '@icons/box.png';
import openCart from '@icons/openbox.png';
import user from '@icons/userwhite.png';
import logoblack from '@logos/ilcapoblack.png';


const Header = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);

	return (
		<div className='header-container'>
			<div className="header-user_container center py-1">
				<img src={user} className='header-user' />
			</div>
			<div className="header-logo_container center">
				<img src={logoblack} className='header-logo' />
			</div>
			<div className="header-cart_container center py-1">
				<img onClick={() => setCartIsOpen(!cartIsOpen)} src={cartIsOpen ? openCart : cart} className='header-cart' />
			</div>

		</div>
	);
}

export default Header;
