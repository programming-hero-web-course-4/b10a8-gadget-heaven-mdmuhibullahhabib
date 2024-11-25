import { useLoaderData, useParams } from 'react-router-dom'
import Product from './Product';
import { useEffect, useState } from 'react';

function Products() {
  const data = useLoaderData()
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(category){
      const product = data.products.filter(product => product.category == category);
    setProducts(product)
    
    }
    else{
      setProducts(data)
    }
  }, [category, data])


  console.log(data.products)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>


      {
        products.map(product => <Product key={product.product_id} product={product}></Product>)
      }

    </div>
  )
}

export default Products