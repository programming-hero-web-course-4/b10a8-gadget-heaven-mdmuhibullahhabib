import React from 'react'

function Footer() {
  return (
    <footer className="text-center mx-[160px] ">
    <h2 className='text-2xl font-bold text-black'>Gadget Heaven</h2>
    <p className='text-[#09080F99] pb-6'>Leading the way in cutting-edge technology and innovation.</p>
    <hr />
    <div className='footer pt-6 p-10 ite'>
        <nav>
            <h6 className="footer-title text-black">Services</h6>
            <a className="text-[#09080F99] link-hover">Product Support</a>
            <a className="text-[#09080F99] link-hover">Order Tracking</a>
            <a className="text-[#09080F99] link-hover">Shipping & Delivery</a>
            <a className="text-[#09080F99] link-hover">Returns</a>
        </nav>

        <nav>
            <h6 className="footer-title text-black">Company</h6>
            <a className="text-[#09080F99] link-hover">About us</a>
            <a className="text-[#09080F99] link-hover">Careers</a>
            <a className="text-[#09080F99] link-hover">Contact</a>
        </nav>

        <nav>
            <h6 className="footer-title text-black">Legal</h6>
            <a className="text-[#09080F99] link-hover">Terms of Service</a>
            <a className="text-[#09080F99] link-hover">Privacy policy</a>
            <a className="text-[#09080F99] link-hover">Cookie policy</a>
        </nav>
    </div>
</footer>
  )
}

export default Footer