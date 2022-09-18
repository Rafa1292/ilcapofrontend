import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const ProductList = () => {
    return (
        <div className="product-list col-10">
            <div className="d-flex product-list_title">
                <span className='bold m-1'>
                    Pizzas
                </span>
                <hr />
            </div>

            
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    );
}

export default ProductList;