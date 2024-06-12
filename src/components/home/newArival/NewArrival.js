import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../../action/Index'
import AddCart from '../button/AddCart'

function NewArrival() {
    const newProduct = useSelector((state) => state.allProduct.Product.categories[1])
    console.log(newProduct);

    return (
        <div className='my-4'>
            <h1 className='my-4 font-serif text-4xl w-full text-center'>NEW ARRIVAL</h1>
            <div className='flex flex-wrap justify-evenly'>
                {
                    newProduct.items.slice(0, 4).map((productItem, id) => {
                        return (
                            <div key={id} className='flex items-center px-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-col p-4'>
                                <img className='h-80 w-64 rounded-md object-cover' src={productItem.image} alt={productItem.name} />
                                <p className='font-light text-lg text-center'>{productItem.name}</p>
                                <p className='font-light text-lg mb-2 items-start'>${productItem.price}</p>
                                <p className='font-thin text-lg text-start'>{productItem.description}</p>
                                <AddCart />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewArrival