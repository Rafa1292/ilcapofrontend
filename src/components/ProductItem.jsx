import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import cart from '@icons/shopcart.png';
import CustomSelect from '@components/CustomSelect';

const ProductItem = () => {
    const [option, setOption] = useState(null);

    return (
        <div className="d-flex product-container col-md-5 flex-wrap center">
            <img className='product-image' src='https://cdn.papajohns.cr/thumbnails/pizzas/bannermargaritacaprese_1610567568_medium_1652317797_small.png' />
            <div className="options-container flex-wrap">
                <CustomSelect value={option} defaultLabel='Seleccione un tamaño'>
                    <div onClick={() => setOption('Grande')}
                        className="col-10 d-flex flex-wrap custom-select_option">
                        Grande
                    </div>
                    <div onClick={() => setOption('Mediana')}
                        className="col-10 d-flex flex-wrap custom-select_option">
                        Mediana
                    </div>
                    <div onClick={() => setOption('Pequeña')}
                        className="col-10 d-flex flex-wrap custom-select_option">
                        Pequeña
                    </div>
                    <div onClick={() => setOption('Personal')}
                        className="col-10 d-flex flex-wrap custom-select_option">
                        Personal
                    </div>
                </CustomSelect>
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