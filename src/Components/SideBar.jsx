import React from 'react'

function SideBar() {
    return (

        <div className="card bg-base-100 w-96 p-10 shadow-xl space-y-4">
            <ul className="menu menu-md bg-base-200 rounded-box w-56">
                <li><a>All Products</a></li>
            </ul>
            <ul className="menu menu-md bg-base-200 rounded-box w-56">
                <li><a>Mobiles</a></li>
            </ul>
            <ul className="menu menu-md bg-base-200 rounded-box w-56">
                <li><a>Laptops</a></li>
            </ul>
            <ul className="menu menu-md bg-base-200 rounded-box w-56">
                <li><a>Accessories</a></li>
            </ul>
            <ul className="menu menu-md bg-base-200 rounded-box w-52">
                <li><a>Smart Watch</a></li>
            </ul>
        </div>


    )
}

export default SideBar