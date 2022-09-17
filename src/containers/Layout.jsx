import React, { useEffect, useContext, useState, useRef } from 'react';
import Header from '@components/Header';
import MenuBtn from '@components/MenuButton';
import OptionsBtn from '@components/OptionsButton';
import Contact from '@components/Contact';
import Loader from '@components/Loader';

const Layout = ({ children }) => {
	const [loader, setLoader] = useState(true);

	return (
		<div className="layout center" style={{ position: 'relative' }}>
			<MenuBtn/>
			<OptionsBtn/>
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
