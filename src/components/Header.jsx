import React, { useEffect, useContext } from 'react';
import '@styles/Header.scss';
import cart from '@icons/box.png';
import openCart from '@icons/openbox.png';
import user from '@icons/userwhite.png';
import logoblack from '@logos/ilcapoblack.png';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {
	const {state, toggleCart} = useContext(AppContext);
	const {cartIsOpen} = state;


	return (
		<div className='header-container'>
			<div className="header-user_container center py-1">
				<img src={user} className='header-user' />
			</div>
			<Link to='/' className="header-logo_container center">
				<img onClick={() => toggleCart(false)} src={logoblack} className='header-logo' />
			</Link>
			<Link to={!cartIsOpen ? '/cart' : '/'} className="header-cart_container center py-1">
				<img onClick={() => toggleCart(!cartIsOpen)} src={cartIsOpen ? openCart : cart} className='header-cart' />
			</Link>

		</div>
	);
}

export default Header;
