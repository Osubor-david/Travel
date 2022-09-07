import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import img from '../Images/lake.jpg'
import {faBook} from '@fortawesome/free-solid-svg-icons'
function Hero() {
  return (
    <div className='w-full h-[580px] '>
        <div className='w-full h-[580px] bg-black/70  absolute'>
    <img src={img} alt="" className='object-cover w-full h-full  mix-blend-overlay'/>
    </div>
    <div className='container mx-auto relative text-white'>
     <div className='px-4 py-12 pt-[100px]'>
        <h2 className='text-6xl font-bold pt-6   text-center '>Travel</h2>
        <div className='border-b-2 mt-8 mx-auto lg:w-[1000px]'></div>
        <h3 className='sm:text-2xl text-xl font-semibold mt-6 text-center'>The travel company that will change the way you <br></br> see the world </h3>
     <div className='border-2 mt-5  text-black rounded mx-auto border-white p-3 items-center w-[140px] flex'>
        Read More<FontAwesomeIcon icon={faBook} className="ml-2"/>
     </div>
     </div>
    </div>
    </div>

  )
}

export default Hero