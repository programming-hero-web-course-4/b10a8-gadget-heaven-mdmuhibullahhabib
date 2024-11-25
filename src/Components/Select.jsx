import React from 'react'

function Select({ product }) {

    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = product;
    return (
        <div className='mt-5'>

            <div className='w-11/12 mx-auto'>
                    {


                            <div className='w-11/12 mx-auto p-1 flex justify-between bg:border-gray-200	 border-gray-200 border-2 rounded-lg mb-4'>
                                <div className='flex  gap-5 text-start'>
                                    <img className='w-20 rounded-lg ' src={product_image} alt="" />
                                    <div>
                                        <p className='font-bold'>{product.product_title}</p>
                                        <p className=''>{description}</p>
                                        <p className=''>{price}k</p>
                                    </div>

                                </div>
                                <div onClick={() => handleDelete(product_id)} className='w-7 h-8 flex'>
                                    <img src="https://img.icons8.com/?size=48&id=102550&format=png" alt="" />
                                </div>
                            </div>
                    }

            </div>

        </div>
    )
}

export default Select