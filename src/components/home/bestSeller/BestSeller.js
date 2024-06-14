import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../action/Index';
import AddCart from '../button/AddCart';
import data from '../../API/APi.json';
import { NavLink } from 'react-router-dom';

function BestSeller() {
    const dispatch = useDispatch();
    dispatch(setProducts(data));
    const productAll = useSelector((state) => state.allProduct.Product.categories[0]);

    return (
        <div className='my-4'>
            <h1 className='my-4 font-serif text-4xl w-full text-center'>BEST SELLERS</h1>
            <div className='flex flex-wrap justify-evenly'>
                {
                    productAll && productAll.items && productAll.items.slice(0, 8).map((productItem, id) => (
                        <div key={id} className='flex px-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-col items-center p-4'>
                            <img className='h-80 w-64 rounded-md object-cover' src={productItem.image} alt={productItem.name} />
                            <p className='font-light text-lg text-center'>{productItem.name}</p>
                            <p className='font-light text-lg items-start text-start'>${productItem.price}</p>
                            <p className='font-thin text-lg text-start'>{productItem.description}</p>
                            <NavLink to={`/cart/${productItem.id}`}>
                                <AddCart />
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BestSeller;
