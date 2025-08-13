import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        {/* Move background image first and fix z-index */}
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-10 pointer-events-none'/>
        
        <div className='text-center mt-5 mb-8 relative z-10'>

            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p>New: AI feature integrated</p>
                <img src={assets.star_icon} className='w-2.5' alt="" />
            </div>

            <h1 className='text-3xl sm:text-6xl front-semibold sm:leading-16 text-gray-700'>Your
                <span className='text-primary'>  thoughts</span>, <br />amplified.
            </h1>

            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>
                Share your stories, thoughts, and ideas in a universe designed for
                writers who believe their words matter. Here, your voice doesn't just
                speak—it echoes, connects, and inspires others to join the conversation.
            </p>
            
            <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden relative z-20'>
                <input type="text" placeholder='Uncover buried voices...' required className='w-full pl-4 outline-none bg-transparent'/>
                <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>
                    Search
                </button>
            </form>
        </div>
    </div>
  )
}

export default Header