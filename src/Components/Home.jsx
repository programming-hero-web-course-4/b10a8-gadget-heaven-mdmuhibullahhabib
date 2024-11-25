
import { Outlet, useLoaderData } from 'react-router-dom'
import AllProducts from '../Pages/AllProducts'
import SideBar from './SideBar'
import Categories from './Categories'
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

function Home() {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Home</title>
      </Helmet>
      {/* Banner */}
      <div className='bg-violet-700'>
      <div className=' rounded-lg mx-5  mt-5'>
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      </div>
      <div className='flex w-11/12 mx-auto'>
        <Categories categories={categories}></Categories>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home