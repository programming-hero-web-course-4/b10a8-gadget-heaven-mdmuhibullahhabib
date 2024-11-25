import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      {/* Dynamic Section */}
      <Outlet></Outlet>
      {/* Footer */}
  
    </div>
  )
}

export default MainLayout