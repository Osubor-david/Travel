import React from 'react'
import img from '../Images/iceland.jpg'
import img1 from '../Images/mountain-top.jpg'
import img2 from '../Images/mountain-view.jpg'
function Adventure() {
  return (
    <div className='container h-full  mx-auto text-center'>
        <h2 className='font-bold text-3xl'>A Life Time Adventure</h2>
        <div className='grid gap-3 lg:px-10 md:grid-cols-3 mt-10'>
        <div className='px-6 md:px-4 mx-auto'>
            <div className='h-full  border-gray-200 border-opacity-60  overflow-hidden'>
             <img src={img} alt="name" className='lg:h-60 md:h-38 w-full object-cover object-center' />
             <div className='p-6'>
                 <h2 className='font-bold md:text-2xl lg:text-3xl text-3xl mb-1'>Vivid Travel</h2>
                 <p className='mt-4'>Focusing on luxury holidays,Niquesa's new travel service also focuses on the 'Experience'</p> 
               </div>
            </div>
        </div>
        <div className='px-6 md:px-4 mx-auto'>
            <div className='h-full  border-gray-200 border-opacity-60  overflow-hidden'>
             <img src={img1} alt="name" className='lg:h-60 md:h-38 w-full object-cover object-center' />
             <div className='p-6'>
                 <h2 className='font-bold md:text-2xl lg:text-3xl text-3xl mb-1'>Vivid Travel</h2>
                 <p className='mt-4'>Focusing on luxury holidays,Niquesa's new travel service also focuses on the 'Experience'</p> 
               </div>
            </div>
        </div>
        <div className='px-6 md:px-4 mx-auto'>
            <div className='h-full  border-gray-200 border-opacity-60  overflow-hidden'>
             <img src={img2} alt="name" className='lg:h-60 md:h-38 w-full object-cover object-center' />
             <div className='p-6'>
                 <h2 className='font-bold md:text-2xl lg:text-3xl text-3xl mb-1'>Vivid Travel</h2>
                 <p className='mt-4'>Focusing on luxury holidays,Niquesa's new travel service also focuses on the 'Experience'</p> 
               </div>
            </div>
        </div>
        <div className='px-6 md:px-4 mx-auto'>
            <div className='h-full   border-gray-200 border-opacity-60  overflow-hidden'>
             <img src={img1} alt="name" className='lg:h-60 md:h-38 w-full object-cover  shadow-lg object-center' />
             <div className='p-6'>
                 <h2 className='font-bold md:text-2xl lg:text-3xl text-3xl mb-1'>Vivid Travel</h2>
                 <p className='mt-4'>Focusing on luxury holidays,Niquesa's new travel service also focuses on the 'Experience'</p> 
               </div>
            </div>
        </div>
        <div className='px-6 md:px-4 mx-auto'>
            <div className='h-full  border-gray-200 border-opacity-60  overflow-hidden'>
             <img src={img2} alt="name" className='lg:h-60 h-30 md:h-38 w-full object-cover object-center' />
             <div className='p-6'>
                 <h2 className='font-bold md:text-2xl lg:text-3xl text-3xl mb-1'>Vivid Travel</h2>
                 <p className='mt-4'>Focusing on luxury holidays,Niquesa's new travel service also focuses on the 'Experience'</p> 
               </div>
            </div>
        </div>
        <div className='px-6 md:px-4 mx-auto'>
            <div className='h-full  border-gray-200 border-opacity-60  overflow-hidden'>
             <img src={img1} alt="name" className='lg:h-60 h-30 md:h-38 w-full object-cover object-center' />
             <div className='p-6'>
                 <h2 className='font-bold md:text-2xl lg:text-3xl text-3xl mb-1'>Vivid Travel</h2>
                 <p className='mt-4'>Focusing on luxury holidays,Niquesa's new travel service also focuses on the 'Experience'</p> 
               </div>
            </div>
        </div>
         
          
        </div>
        <hr className='mx-auto hidden md:block  h-[3px] bg-gray-100 px-8 container  md:w-[700px]   mt-10 lg:w-[1000px]'/>
    </div>
  )
}

export default Adventure