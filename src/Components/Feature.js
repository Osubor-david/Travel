import React from 'react'
import { faCameraRetro,faHeart,faBicycle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Feature() {
  return (
    <div className='container mx-auto py-8 '>
    <h1 className='font-bold md:text-4xl text-3xl text-center'>Best Features</h1>
    <p className='mt-6 text-center'>Geusts can celebrate a milstone birthday with their own private camp and Dj on a glacier in <br/>iceland,
        indulge in a gastronomic tour of the Douro Valley,or connect with each other</p>

        <div className=' py-7 mt-5'>
          <div className='grid text-center  gap-5 md:grid-cols-3'>
          <div>
            <i><FontAwesomeIcon icon={faCameraRetro} className="fa-6x" style={{color:'orange'}}/></i>
            <h2 className='font-bold text-3xl mt-3'>Experience</h2>
            <p className='font-light mt-5'>Consequently,trips are designed to encompass <br/>
         emotive experience such as celebration,<br/>
          connection,indulgence,romance or<br/>
           replenishment</p>
            </div>    
            <div>
            <i><FontAwesomeIcon icon={faHeart} className="fa-6x" style={{color:'orange'}}/></i>
              <h2 className='font-bold text-3xl mt-3'>Happiness</h2>
              <p className='font-light mt-5'>Consequently,trips are designed to encompass <br/>
         emotive experience such as celebration,<br/>
          connection,indulgence,romance or<br/>
           replenishment</p>
            </div>    
            <div>
            <i><FontAwesomeIcon icon={faBicycle} className="fa-6x" style={{color:'orange'}}/></i>
            <h2 className='font-bold text-3xl mt-3'>Adventure</h2> 
            <p className='font-light mt-5'>Consequently,trips are designed to encompass <br/>
         emotive experience such as celebration,<br/>
          connection,indulgence,romance or<br/>
           replenishment</p>
           
            </div>    

          
          </div>  
          <hr className='mx-auto hidden md:block h-[3px] px-8 bg-gray-100  container w-[400px] md:w-[700px]   mt-20 lg:w-[1000px]'/>
        </div>
    </div>
  )
}

export default Feature