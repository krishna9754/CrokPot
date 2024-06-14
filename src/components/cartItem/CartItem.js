import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error from './error/Error';
import Quantity from './quantity/Quantity';
import Buy from './button/Buy';
import Social from '../contact/social/Social';
import SimilarProduct from './similarProduct/SimilarProduct';

function CartItem() {
  const { id } = useParams();
  const categories = useSelector((state) => state.allProduct.Product.categories);

  let selectedProduct = null;

    categories.forEach(category => {
      category.items.forEach(item => {
        if (item.id === parseInt(id)) {
          selectedProduct = item;
        }
      });
    });



  if (!selectedProduct) {
    return <div><Error /></div>;
  }

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center gap-20 p-4 my-10 scroll-auto'>
        <div className='shadow-xl shadow-gray-500 rounded-md'>
          <img className='w-full md:w-96 h-[420px] object-cover rounded-md' src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
        <div className='w-full md:w-96 mt-4 md:mt-0'>
          <h1 className='text-2xl md:text-4xl font-serif font-semibold mb-4'>{selectedProduct.name}</h1>
          <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
            <p className='text-gray-600 font-semibold text-xl mb-2 md:mb-0'>${selectedProduct.price}</p>
            <p className='text-gray-600 mb-2 md:mb-0'>Stock: <span className='text-yellow-500'>In Stock</span></p>
          </div>
          <p className='my-2 font-thin text-lg md:text-xl'>{selectedProduct.description}</p>
          <Quantity />
          <a href='/payment'><Buy /></a>
          <div className='my-4'>
            <p className='font-semibold'>Share this:</p>
            <Social />
          </div>
        </div>
      </div>
      <div className='w-full h-1 border-2 border-black my-8'></div>
      <SimilarProduct />
    </>
  );
}

export default CartItem;
