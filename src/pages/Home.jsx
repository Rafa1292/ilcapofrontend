import React, { useEffect, useContext } from 'react';
import ProductList from '@containers/ProductList';
import '@styles/Home.scss';

const Home = () => {

	return (
		<div className='home col-10'>
			<ProductList />
		</div>
	);
}

export default Home;
