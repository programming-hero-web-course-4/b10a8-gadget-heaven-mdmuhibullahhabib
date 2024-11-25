import React, { useEffect, useState } from 'react'
import AllProduct from './AllProduct';

function AllProducts() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('../allProducts.json')
        .then(res => res.json())
        .then(data =>setAllProducts(data.allProducts))
    },[])
  return (
    <div className=''>
        <h2 className='text-2xl font-bold text-center mb-10'>Explore Cutting-Edge Gadgets</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          {
            allProducts.map(allProduct =><AllProduct allProduct={allProduct} key={allProduct.product_id}></AllProduct> )
          }
        </div>
    </div>
  )
}
export default AllProducts