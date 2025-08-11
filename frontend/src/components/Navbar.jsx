import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();


  return (
    <div className='flex justify-between items-center py-0 mx-25 sm:mx-20 xl:mx-45 -mt-25'>
        <img onClick={()=>navigate('/')} src={assets.logowhite} alt="logowhite" className='w-44 sm:w-80 -ml-30 cursor-pointer' />
        <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
            Login
            <img src={assets.arrow} className='w-3' alt="arrow" />
        </button>
    </div>
  )
}

export default Navbar