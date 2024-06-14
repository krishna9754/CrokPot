import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../action/Index';
import data from '../API/APi.json';
import AddCart from '../home/button/AddCart';
import { NavLink } from 'react-router-dom';

function ProductsItem() {
    const [selectData, setSelectData] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const prodAll = useSelector((state) => state.allProduct.Product.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(data));
    }, [dispatch]);

    const handleCategoryChange = (event) => {
        setSelectData(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = prodAll && prodAll[selectData] ?
        prodAll[selectData].items.filter((productItem) =>
            productItem.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) : [];

    return (
        <div className='my-4'>
            <div className='flex justify-between items-center mb-6 mx-10'>
                <div className='flex items-center'>
                    Sort by:
                    <select
                        className='p-2 border rounded ml-2'
                        value={selectData}
                        onChange={handleCategoryChange}
                    >
                        {prodAll && prodAll.map((category, index) => (
                            <option key={index} value={index}>
                                {category.category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex items-center'>
                    <input
                        type='text'
                        className='p-2 border rounded'
                        placeholder='Search products...'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className='flex flex-wrap justify-evenly items-center'>
                {filteredProducts.map((productItem, id) => (
                    <div key={id} className='flex px-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-col  p-4'>
                        <img className='h-80 w-64 rounded-md object-cover' src={productItem.image} alt={productItem.name} />
                        <p className='font-light text-lg pt-2'>{productItem.name}</p>
                        <p className='font-light text-lg '>${productItem.price}</p>
                        <p className='font-thin text-lg '>{productItem.description}</p>
                        <NavLink to={`/cart/${productItem.id}`}>
                            <AddCart />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsItem;
