import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faHome,faEnvelope,faPhone,faPrint} from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
  <div>
    <div className='w-full bg-blue-600 mt-4 h-[70px]'>
    <div className='container mx-auto'>
      <div className='text-white justify-between items-center p-4 flex flex-wrap'>
        <h2>Get connected with us on social networks!</h2>
           
        </div> 
    </div>

    
    </div>
    <div className='bg-black/90 text-white w-full'>
     <div className="grid md:grid-cols-4 grid-cols-2 py-12 p-4 gap-8  container mx-auto">
        <div>
         <h2 className='uppercase text-xl'>company name </h2>
         <p className='border-b w-20 mt-1 border-blue-500'></p>
         <p className='mt-6'>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="pl-4">
        <h2 className='uppercase text-xl'>PRODUCTS </h2> 
        <p className='border-b w-20 border-blue-500 mt-1 '></p>
        <p className='mt-6'><a href="/">
        MDBootstrap
            </a></p>
            <p className='mt-6'><a href="/">
        MDBootstrap
            </a></p>
            <p className='mt-6'><a href="/">
        MDBootstrap
            </a></p>
            <p className='mt-6'><a href="/">
        MDBootstrap
            </a></p>
        </div>
        <div>
        <h2 className='uppercase text-xl'>USEFUL LINKS</h2> 
        <p className='border-b w-20 border-blue-500 mt-1 '></p>
        <p className='mt-6'><a href="/">
        Your Account
            </a></p>
            <p className='mt-6'><a href="/">
            Become an Affiliate
            </a></p>
            <p className='mt-6'><a href="/">
            Shipping Rates
            </a></p>
            <p className='mt-6'><a href="/">
            Help
            </a></p>
        </div>
        <div>
        <h2 className='uppercase text-xl'>CONTACT </h2> 
        <p className='border-b w-14 border-blue-500 mt-1 '></p>
        <p className='mt-6'><FontAwesomeIcon className='pr-2' icon={faHome}/>      New York, NY 10012, US</p>
        <p className='mt-6'><FontAwesomeIcon className='pr-2' icon={faEnvelope}/>       info@example.com</p>
        <p className='mt-6'><FontAwesomeIcon className='pr-2' icon={faPhone}/>       + 01 234 567 88</p>
        <p className='mt-6'><FontAwesomeIcon className='pr-2' icon={faPrint}/>      + 01 234 567 89</p>
        </div>
     </div>
    </div>
    <div className='bg-[#0d0d0d] text-white p-4 text-center'>
       <div className='mx-auto container text-gray-300'>
       © 2022 Copyright: <a href="/" className='text-white'>
        DAVIDWEB
       </a>
       </div>
    </div>
    </div>
  )
}

export default Footer