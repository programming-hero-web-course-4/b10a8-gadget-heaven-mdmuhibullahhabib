import { Link } from 'react-router-dom';

function AllProduct({ allProduct }) {
  const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = allProduct;
  return (
    <Link to={`/allProducts/${product_id}`}>
      <div className="card bg-base-100 w-96 p-10 shadow-xl">
        <figure className="">
          <img
            src={product_image}
            alt="Shoes"
            className="rounded-lg h-[181px] image-full" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}k </p>
          <div className="card-actions ">
            <button className="hover:text-white btn bg-white text-violet-800 btn-primary rounded-full border border-violet-700">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default AllProduct