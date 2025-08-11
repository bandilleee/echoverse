import React from 'react'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div>
            <div>
                <p>New: AI feature integrated</p>
                <img src="" alt="" />
            </div>
        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-opacity-50'/>
    </div>
  )
}

export default Header