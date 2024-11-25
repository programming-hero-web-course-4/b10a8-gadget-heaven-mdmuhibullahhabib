import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet-async'

function Statistics() {
  return (
    <div>
      <Helmet>
      <title>Gadget Heaven | Statistics</title>

      </Helmet>
      <div className=' rounded-lg mx-5  mt-5'>
        <Navbar></Navbar>
      </div>

      <div className='pt-10  '>
        <div className='h-[350px] w-full mx-5 rounded-lg space-y-8 bg-violet-700 pt-14'>
          <h1 className='text-4xl font-bold text-white text-center'>Statistics</h1>
          <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
          
          </div>

          <div className='w-11/12 mx-auto pt-8 text-start'>
          <h2 className='text-xl font-bold'>Statistics</h2>
          </div>
          </div>

      <h2>Kuno data nai akhon</h2>
      <Footer></Footer>
    </div>
  )
}

export default Statistics