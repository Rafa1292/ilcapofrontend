import React, { useEffect, useContext, useState, useRef } from 'react';
import Header from '@components/Header';
import Loader from '@components/Loader';

const Layout = ({ children }) => {
	const [loader, setLoader] = useState(true);

	return (
		<div className="layout center" style={{ position: 'relative' }}>
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
