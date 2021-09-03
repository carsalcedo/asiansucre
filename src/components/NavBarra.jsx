import React, {useState} from 'react';
import Bc from '../assets/img/bc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  Link,
} from "react-router-dom";


 const NavBarra = () => {
  const [click, setClick] = useState(false);
  const openMovilMenu = () => setClick(!click);
    return (
<nav className="bg-red-700 rounded-lg">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
        <button type="button" onClick={openMovilMenu} className="inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-yellow-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {click?
          <svg className=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        :
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          }  
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
        <Link to="/"> 
        <button className="block lg:hidden">
          <img className='h-10 w-auto' src={Bc} alt="Workflow"/>
        </button>
        </Link>
        <Link to="/"> 
          <button className='hidden lg:block'>
          <img className=" h-10 w-auto" src={Bc} alt="Workflow"/>
          </button>
        </Link>
          <div className="hidden lg:block font-mansalva text-white ml-1 cursor-default hover:text-yellow-400">ASIAN SUCRE</div>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
          
            <Link to="/concursos" className="text-white hover:bg-gray-700 focus:bg-gray-700 hover:text-yellow-400 focus:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-700 ease-in-out" aria-current="page">Concursos</Link>

            <Link to="/shows" className="text-white hover:bg-gray-700 focus:bg-gray-700  hover:text-yellow-400 focus:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-700 ease-in-out">Shows</Link>

            <Link to="/maids" className="text-white hover:bg-gray-700 focus:bg-gray-700 hover:text-yellow-400 focus:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-700 ease-in-out">Maids</Link>

            <Link to="/videogames" className="text-white hover:bg-gray-700 focus:bg-gray-700 hover:text-yellow-400 focus:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-700 ease-in-out">Video Games</Link>
           
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <a href="https://www.facebook.com/As%C3%ADan-Sucre-Club-303054210189146" target="_blank">
        <button type="button" className="bg-gray-800 h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-700 ease-in-out">
        <FontAwesomeIcon  icon={faFacebook} size='lg' />
        </button>
        </a>
        <a href="https://www.instagram.com/asian_sucre_club/?hl=es-la" target="_blank">
        <button type="button" className="ml-2 bg-gray-800 h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-700 ease-in-out">
          <FontAwesomeIcon  icon={faInstagram} size='lg'/>
        </button>
        </a>
       {/*  <button type="button" className="ml-2  h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <FontAwesomeIcon  icon={faMoon} size='lg'/>
        </button>*/}
      

      </div>
    </div>
  </div>

  <div className={click ? 'block sm:hidden' : "hidden sm:hidden"} id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
   
      <Link to="/concursos" className="bg-gray-900 text-yellow-400 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Concursos</Link>

      <Link to="/shows" className="text-white hover:bg-gray-700 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Shows</Link>

      <Link to="/maids" className="text-white hover:bg-gray-700 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Maid</Link>

      <Link to="/videogames" className="text-white hover:bg-gray-700 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Video Games</Link>
     
    </div>
  </div>
</nav>
    )
}

export default NavBarra