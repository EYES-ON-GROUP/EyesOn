import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const Planstarifs = () => { 
  return(
<section className='min-h-[10vh]'>
 <div className='w-full h-64 rounded-br-3xl'>
   <img src="/assets/images/kids.jpg" className='relative object-cover w-full h-full rounded-br-3xl ' alt="kids" />
    {/* pour gerer l'opacite  */}
   <div className='absolute top-0 w-full h-64 bg-white rounded-br-3xl opacity-15'></div>   
 </div>

  <div className='w-[90%] flex justify-between mx-auto  left-12 px-4 absolute top-4'>
    {/* icon-shutdown  */}
    <img src="/assets/images/icons8-shutdown-48.png" alt="icon" />
    {/* les liens  */}

    <div className='flex gap-10 max-md:hidden place-items-center'>
      <nav className='flex gap-4 text-white'>
        <NavLink to="/home" className=''>Home</NavLink>
        <NavLink to="/" className='text-orange'>Plans&Tarifs</NavLink>
        <NavLink to="/demo" className=''>Demo</NavLink>
      </nav>

      <Link to='' className='flex gap-2 px-5 py-3 font-semibold text-white transition-all duration-300 ease-in-out group rounded-tl-xl rounded-br-xl hover:bg-dark-blue bg-blue'>
        <p>Buy Now</p>
        <img src="/assets/images/shopping-cart (2).png" alt="" className='transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
      </Link>
    </div>
  </div>

  <div className="absolute flex items-center justify-center w-[90%] md:w-[85%] h-10 px-4 md:px-24 bg-gray-300 left-1/2 transform -translate-x-1/2 top-44 rounded-md">
  <p className="text-sm text-center text-black md:text-lg">
    Choose the good plan for your family
  </p>
</div>

</section>
)
}

export default Planstarifs