import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='min-h-[10vh] z-50 fixed py-5 w-full  '>
        <div id='largerHeader' className='w-[90%] flex justify-between  mx-auto'> 
            <img src="/assets/images/ON.png" alt="logo" className='w-20 h-16 transition-transform duration-300 ease-in-out hover:translate-x-1' />
            <div className='flex gap-10 max-md:hidden place-items-center '>
                <nav className='flex gap-4'>
                    <NavLink to="/" className='text-white'>Home</NavLink>
                    <NavLink to="/tarif" className='text-white'>Plans&Tarifs</NavLink>
                    <NavLink to="/demo" className='text-white'>Demo</NavLink>
                </nav>
                <Link to='' className='flex gap-2 px-5 py-3 font-semibold text-white transition-all duration-300 ease-in-out group rounded-tl-xl rounded-br-xl hover:bg-dark-blue bg-blue'>
                    <p>Buy Now</p>
                    <img src="/assets/images/shopping-cart (2).png" alt="" className='transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header