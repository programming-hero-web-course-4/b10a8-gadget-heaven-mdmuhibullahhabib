import '../Components/Banner.css'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToStoredCartList, addToStoredWishList } from '../Utility/addToCart';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const addToCart = () => {
  toast.success('Item Added to Cart', {
    position: "top-center",
    autoClose: 5000,
    theme: "light",
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,

  })
}
const addToWishList = () => {
  toast.success('Item Added to WishList', {
    position: "top-center",
    autoClose: 5000,
    theme: "light",
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,

  })
}

function ProductDetails() {

  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id)

  console.log(data)


  const product = data.products.find(product => product.product_id === id);

  const { product_title, product_image, category, price, description, specification, availability, rating } = product;

  const handleAddToCart = (id) => {
    addToStoredCartList(id)
    addToCart()

  }
  const handleAddToWish = (id) => {
    addToStoredWishList(id)
    addToWishList()
  }

  return (
    <div>
      <Helmet>
      <title>Gadget Heaven | Product Details</title>
      </Helmet>
      <div className=' rounded-lg mx-5  mt-5'>
        <Navbar></Navbar>
      </div>

      <div className='pt-10 mb-96 '>
        <div className='h-[494px] w-full space-y-8 bg-violet-700 pt-14'>
          <h1 className='text-4xl font-bold text-white text-center'>Product Details</h1>
          <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

        </div>



        <div className=' bg-gray bg-common mt-[-300px] ml-[-150px]'>
          <div className=' rounded-xl mt-[-200px] ml-[175px] p-4' >
            <div className="card lg:card-side bg-base-100 p-5 shadow-xl mx-[160px] mt-[260px]">
              <figure className=''>
                <img
                  className='rounded-lg'
                  src={product_image}
                  alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl">{product_title}</h2>
                <p className='text-xl font-bold'>Price:{price}</p>
                <button className=" border w-24 border-green-400 bg-gray-200 text-green-500 btn-primary py-2  px-4 rounded-full">{availability}</button>
                <p></p>
                <div>
                  <h2 className='font-bold text-xl'>Specification:</h2>
                  <p>{specification}</p>

                </div>
                <div className='space-y-2 pb-2'>
                  <h2 className='font-bold text-xl'>Rating</h2>
                  <div className='flex items-center gap-4'>
                    <div className="rating ">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    {rating}
                  </div>
                </div>
                <div className="card-actions items-center">
                  <button onClick={() => handleAddToCart(id)}
                    className="btn bg-violet-800 text-white btn-primary  px-4 rounded-full">Add to cart<img className='w-4 ' src="https://img.icons8.com/?size=50&id=9671&format=png" alt="" />
                  </button>
                  <img onClick={() => handleAddToWish(id)}
                    className='w-8 border border-black bg-white p-1 rounded-full' src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <Footer></Footer>
      < ToastContainer />
    </div>
  )
}

export default ProductDetails