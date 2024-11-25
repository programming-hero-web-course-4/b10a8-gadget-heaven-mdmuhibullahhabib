import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories({categories}) {
  return (
    <div className='card bg-base-100 p-10 shadow-xl space-y-4'>
       {categories.map(category => (
         <NavLink key={category.id} 
         to={`/category/${category.category}`}
         className={({ isActive }) => `tab${isActive ? 'tab-active bg-violet-600 text-white rounded-full px-3 py-2' : ''}`}>
            {category.category}
        </NavLink>
       ))}
    </div>
  )
}

export default Categories