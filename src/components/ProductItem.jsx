import React from 'react';
import '@styles/ProductItem.scss';
import cart from '@icons/shopcart.png';

const ProductItem = () => {
    return (
        <div className="d-flex product-container col-md-5 flex-wrap center">
            <img className='product-image' src='https://cdn.papajohns.cr/thumbnails/pizzas/bannermargaritacaprese_1610567568_medium_1652317797_small.png' />
            <div className="options-container flex-wrap">
                <select>
                    <option>Personal</option>
                    <option>Mediana</option>
                    <option>Grande</option>
                </select>
                <span>¢,9800</span>
            </div>
            <span className="description d-flex col-7">
                Pasta delgada, salsa de tomate,
                jamon, hongos, chile dulce, cebolla,
                peperoni, carne, queso mozzarella.
            </span>
            <span className='col-3 d-flex center content-center'>
                <img className='cart' src={cart} />
            </span>
        </div>
    );
}

export default ProductItem;