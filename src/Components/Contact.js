import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faPhone,faEnvelope,faBuilding,faMap} from '@fortawesome/free-solid-svg-icons'
function Contact() {
  return (
    <div className='mx-auto container'>
   <h1 className='font-bold md:text-4xl text-3xl text-center'>Contact</h1>
     <div className='grid md:grid-cols-2 p-8 mt-8'>
        <div>
        <div className='w-1/2 mx-auto mt-20'>
<div class="flex">
  <span class="inline-flex items-center px-3  text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <FontAwesomeIcon icon={faEnvelope}/>
  </span>
  <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block 
  flex-1 min-w-0 
  w-full text-sm  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"/>
</div>
<div class="flex mt-7">
  <span class="inline-flex items-center px-3  text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <FontAwesomeIcon icon={faEnvelope}/>
  </span>
  <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block 
  flex-1 min-w-0 
  w-full text-sm  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"/>
</div>
<div class="flex mt-7">
  <span class="inline-flex items-center px-3  text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <FontAwesomeIcon icon={faEnvelope}/>
  </span>
  <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block 
  flex-1 min-w-0 
  w-full text-sm  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"/>
</div>
<div class="flex mt-7">
  <span class="inline-flex items-center px-3  text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <FontAwesomeIcon icon={faEnvelope}/>
  </span>
  <textarea type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block 
  flex-1 min-w-0 
  w-full text-sm  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"/>
</div>
<div className='text-center'>
        <button className='mx-auto text-center text-white bg-blue-500 py-2 rounded px-3 mt-5'>SEND</button>
        </div>
        </div>

        </div>
        <div>

           <div>

            </div>
            <div>
                <div className='flex md:flex-row flex-col gap-4 text-center mt-5 md:mt-0 md:gap-20 pl-3'>
            <p><FontAwesomeIcon icon={faMap}/> New York,NY 10012</p>     
            <p><FontAwesomeIcon icon={faBuilding}/> Mon-Fri,8:00-22:00</p>
            <p><FontAwesomeIcon icon={faPhone}/>+0123456789</p>
            </div>
        <div id="map-container" class="z-depth-1-half mt-4 map-container mb-5 shadow-2xl h-[450px]"></div>
        </div>
        </div>
     </div>
        </div>
  )
}

export default Contact