import React from 'react'
import Filter from './Filter'
import ProductsItem from './ProductsItem'

function ShopSection() {
    return (
        <div className='flex'>
            <Filter />
            <ProductsItem />
        </div>
    )
}

export default ShopSection