import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center py-7 mx-25 sm:mx-20 xl:mx-45 -mt-5'>
        <img onClick={()=>navigate('/')} src={assets.favicon} alt="favicon" className='w-32 sm:w-40 -ml-30 cursor-pointer' />
        <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 -mr-10 ml-auto'>
            Login
            <img src={assets.arrow} className='w-3' alt="arrow" />
        </button>
    </div>
  )
}
export default Navbar