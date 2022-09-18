import React, { useEffect, useContext, useState, useRef } from 'react';
import Header from '@components/Header';
import MenuBtn from '@components/MenuButton';
import OptionsBtn from '@components/OptionsButton';
import Contact from '@components/Contact';
import Navbar from '@components/Navbar';
import Loader from '@components/Loader';

const Layout = ({ children }) => {
	const [loader, setLoader] = useState(false);
	const [isOpenNavbar, setOpenNavbar] = useState(false);

	const openNavbar = ()=> {
		setOpenNavbar(!isOpenNavbar)
	}
	return (
		<div className="layout center" style={{ position: 'relative' }}>
			<OptionsBtn openNavbar={openNavbar}/>
			<MenuBtn/>
			<Navbar openNavbar={openNavbar} isOpenNavbar={isOpenNavbar}/>
			<Contact/>
			<Header />
			{
				!loader &&
				<>
					{
						children
					}
				</>
				||
				<>
					<Loader />
				</>
			}
		</div>
	);
}

export default Layout;
