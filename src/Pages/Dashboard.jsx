import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList, getStoredWishList } from '../Utility/addToCart';
import Product from './Product';
import Footer from '../Components/Footer';
import Select from '../Components/Select';
import { Helmet } from 'react-helmet-async';


function Dashboard() {
  const [cartList, setCartList] = useState([]);
  const [WishList, setWishList] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  
  const allProducts = useLoaderData();

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartList.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      setCartPrice(total);
    };
    calculateTotalPrice();
  }, [cartList]);

  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map(id => parseInt(id));

    const cartList = allProducts.products.filter(product => storedCartListInt.includes(product.product_id));

    setCartList(cartList);
  }, [])

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map(id => parseInt(id));

    const WishList = allProducts.products.filter(product => storedWishListInt.includes(product.product_id));

    setWishList(WishList);
  }, [])

  const handleSort = () => {
    const sortAddToCart = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortAddToCart)
  }

    const handleClearCart = () => {
    setCartList([]);
    setCartPrice(0);
  };

  return (

    <div>
      <Helmet>
      <title>Gadget Heaven | Dashboard</title>

      </Helmet>
      <div className=' rounded-lg mx-5  mt-5'>
        <Navbar></Navbar>
      </div>

      <div className='pt-10 mb-96 '>
        <div className='h-[350px] w-full mx-5 rounded-lg space-y-8 bg-violet-700 pt-14'>
          <h1 className='text-4xl font-bold text-white text-center'>Dashboard</h1>
          <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
          <div className='pt-8 text-center'>

            <Tabs>
              <TabList className="flex justify-center mb-">
                <Tab className=" border border-white text-white rounded-full px-6 py-1 mr-4">Cart</Tab>
                <Tab className=" border border-white text-white rounded-full px-6 py-1 mr-4">Wishlist</Tab>
              </TabList>

              <div className='mt-16'>

                {/* Cart List*/}
                <TabPanel>
                  <div className=''>
                    <div className='flex justify-between mx-24 pt-12'>
                      <h2 className='text-xl font-bold'>Cart</h2>
                      <div className='flex gap-5 items-center'>

                        <h2 className='text-xl font-bold'>Total Cost: {cartPrice.toFixed(2)}k</h2>
                        <button onClick={() => handleSort()}
                          className='border border-[#9538E2] text-[#9538E2] rounded-full px-6 py-1 mr-2'>Sort By Price</button>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()}
                        className='border border-[#9538E2] text-[#9538E2] rounded-full px-6 py-1 mr-4'>Purchase</button>
                      </div>
                    </div>
                    <div>
                      {
                        cartList.map(product => <Select key={product.product_id} product={product}></Select>)
                      }

                    </div>

                  </div>
                </TabPanel>

                {/* Wish List */}
                <TabPanel>
                  <div >
                    <div className='flex justify-between mx-24 pt-12'>
                      <h2 className='text-xl font-bold'>Wishlist</h2>
                    </div>
                    <div>
                      {
                        WishList.map(product => <Select key={product.product_id} product={product}></Select>)
                      }
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <dialog id="my_modal_1" className="modal text-center">
          <div className="modal-box ">
            <img className='mx-auto' src="https://i.ibb.co.com/m8GtkDK/Group.png" alt="" />
            <h3 className="font-bold text-lg">Payment Successfully</h3>
            <p className="py-4">Thanks for purchasing.</p>
            <p className="">Total:{cartPrice.toFixed(2)}k</p>
            <div className="modal-action">
              <form method="dialog">
                <button
                className="btn text-center"
                onClick={() => {
                  handleClearCart();
                  document.getElementById('my_modal_1').close();
                }}>
                Close
              </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className='pt-60'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Dashboard