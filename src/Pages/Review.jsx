import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet-async'

function Review() {
    return (
        <div>
            <Helmet>
            <title>Gadget Heaven | Review</title>

            </Helmet>
            <div className=' rounded-lg mx-5  mt-5'>
                <Navbar></Navbar>
            </div>

            <div className='pt-10  '>
                <div className='h-[350px] w-full mx-5 rounded-lg space-y-8 bg-violet-700 pt-14'>
                    <h1 className='text-4xl font-bold text-white text-center'>Review</h1>
                    <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-5 space-y-4'>
                <div>
                    <h2 className='text-xl font-bold'> Excellent Product Range</h2>
                    <p>"I was blown away by the variety of gadgets available! From the latest smartwatches to unique accessories, there's something for everyone. I especially loved how well the categories are organized—it made shopping a breeze!"
                    </p>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Super Fast Shipping</h2>
                    <p>"I ordered a pair of noise-canceling headphones, and they arrived within two days! The packaging was secure, and everything was in perfect condition. Great service!"

                    </p>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Competitive Prices</h2>
                    <p>"This shop offers some of the best prices on gadgets compared to other sites. I found a high-end gaming mouse here for 20% less than other retailers. Amazing value!"

                    </p>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Helpful Customer Support</h2>
                    <p>"I had some questions about a product's compatibility with my phone, and the support team was quick to respond and very knowledgeable. They even suggested alternative options. Top-notch service!"

                    </p>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>User-Friendly Website</h2>
                    <p>"The website is so easy to navigate. I could quickly filter products by price and features, making my shopping experience smooth and enjoyable."

                    </p>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>High-Quality Products</h2>
                    <p>"I bought a smart speaker, and it exceeded my expectations. The sound quality is amazing, and it works perfectly with my smart home setup. Everything they sell seems to be top-tier quality."

                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Review