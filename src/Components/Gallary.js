import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import img2 from '../Images/mountain-view.jpg'
function Gallary() {
  return (
    <div className='container mx-auto py-10 '>
        <h2 className='font-bold text-3xl text-center'>Gallary</h2>
        <div className='grid md:grid-cols-2'>
         <div>
            
            <img src={img2} alt=""  className='p-4'/>
         </div>
         <div className='p-4'>
            <p className='text-[green]'><FontAwesomeIcon className='' icon={faHeart}/>   Lifestyle</p>
    
            <h2 className=' mt-2 font-semibold text-2xl'>This is title of the news</h2>
            <p className='mt-2'>
            Nam libero tempore,cum soluta nobis est eligendi optio cumque nihil impedit<br/>quo minus id quod maxime placeat facere possimus,omni voluptas<br/>
            assumenda est,omnis dolor repellendus et aut officiis debitis aut rerum<br/><br/>Nam 
            libero tempore,cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,omnis voluptas assumenda est,omnis dolor repellendus et aut officiis debitis aut rerum.<br/><br/>by Jessica Clark,26/08/2016                
            </p>
            <button className='bg-blue-500 mt-4 rounded text-white px-3 py-2'>READ MORE</button>
         </div>
        </div>
        <hr className='mx-auto hidden md:bolck h-[3px] px-8 bg-gray-100  container w-[400px] md:w-[700px]   mt-10 lg:w-[1000px]'/>
    </div>
  )
}

export default Gallary