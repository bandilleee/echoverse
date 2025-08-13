import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>

        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
            
            <div>
                <img src={assets.logowhite} alt="logowhite" className='w-32 sm:w-50 -ml-13'/>
                <p className='max-w-[420px] mt-1'>
                    Echoverse is where stories come alive and voices never fade. 
                    More than just a blogging platform, we're a universe of interconnected thoughts, 
                    dreams, and discoveries. Here, every writer finds their audience, every reader 
                    discovers new worlds, and every story becomes part of an endless conversation that 
                    spans across minds and hearts. Join us, and let your voice echo through infinity.
                </p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {footer_data.map((section, index)=> (
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link, i)=> (
                                <li key={i}>
                                    <a href="#" className='hover:underline transition'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            
        </div>

        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
            Copyright © 2025 Echoverse - All echoes reserved.
        </p>
    </div>
  )
}

export default Footer