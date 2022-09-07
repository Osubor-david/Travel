import React,{Fragment,useState} from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {  } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF,faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Menu,Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Navbar() {
const [nav, setNav] = useState(false)
const handleClick = () =>{
    setNav(prevNav => !prevNav)
}
  return (
    <div className='w-screen fixed md:pt-0  flex z-10  bg-blue-500 h-[60px]'>
    <div className='w-full h-full '>
        <div className='flex h-full  justify-between container mx-auto items-center text-gray-200 '>
          <div className='flex'>
          <h2 className='font-bold    uppercase md:pt-2 pl-3 md:pl-0 text-2xl sm:text-3xl'>Samiwog106</h2>
          <ul className='md:flex hidden pl-3 z-10 cursor-pointer'>
            <li className='p-4'>
                <Menu as='div' className="relative inline-block text-left">
                    <Menu.Button className='inline-flex  items-center justify-center'>
                        Home
                        <ChevronDownIcon className="-mr-1 pt-1  h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 left-[-20px] mt-2 w-[500px] rounded-md shadow-lg bg-white  divide-y divide-gray-100 focus:outline-none">
                            <Menu.Item>
                            {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                  For Components
                </a>
                     )}  
                     </Menu.Item>
                     <Menu.Item>
                            {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                  For Components
                </a>
                     )}  
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                  For Components
                </a>
  )}  
                            </Menu.Item>
                        </Menu.Items>
                  </Transition>
                
                </Menu>
            </li>
            <li className='p-4'>Features</li>
            <li className='p-4'>Flight</li>
            <li className='p-4'>Gallery</li>
         
          </ul>
          </div>
          <div className='md:flex hidden'>
            <i className='p-4'><FontAwesomeIcon icon={faFacebookF}/></i>
            <i className='p-4'><FontAwesomeIcon icon={faTwitter}/></i>
            <i className='p-4'><FontAwesomeIcon icon={faInstagram}/></i>
          </div>


        
        <div className='md:hidden text-white  bg-blue-500  mr-6 cursor-pointer' onClick={handleClick}>
         {!nav ? <MenuIcon className='w-7' /> : <XIcon className='w-5' />}
        
        </div>  
        </div>
    </div>

    {/* {mobile screen} */}

    {nav &&<ul className='md:hidden  mt-[60px] absolute z-10 text-white/60 bg-blue-500 w-full px-8 cursor-pointer'>
    <li className='border-b-2 border-blue-600 w-full p-4'>
    <Menu as='div' className="relative inline-block text-left">
                    <Menu.Button className='inline-flex  items-center justify-center'>
                        Home
                        <ChevronDownIcon className="-mr-1 pt-1  h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 left-[-20px] mt-2 w-[300px] rounded-md shadow-lg bg-white  divide-y divide-gray-100 focus:outline-none">
                            <Menu.Item>
                            {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                  For Components
                </a>
                     )}  
                     </Menu.Item>
                     <Menu.Item>
                            {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                  For Components
                </a>
                     )}  
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                  For Components
                </a>
  )}  
                            </Menu.Item>
                        </Menu.Items>
                  </Transition>
                
                </Menu>        
    </li>
            <li className='border-b-2 border-blue-600 w-full p-4'>Features</li>
            <li className='border-b-2 border-blue-600 w-full p-4'>Flight</li>
            <li className='border-b-2 border-blue-600 w-full p-4'>Gallery</li>
    
    <div className='flex justify-center'>
            <i className='p-6'><FontAwesomeIcon icon={faFacebookF}/></i>
            <i className='p-6'><FontAwesomeIcon icon={faTwitter}/></i>
            <i className='p-6'><FontAwesomeIcon icon={faInstagram}/></i>
          </div>
          </ul>
}
</div>

  )
}

export default Navbar