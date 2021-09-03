import React, {useState} from 'react'
import Bc from '../assets/img/bc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  Link,
} from "react-router-dom";

const Foot = () => {
    const [clicc, setClicc] = useState(false);
    const openEmail = () => setClicc(!clicc);
    return (
        <nav className="bg-red-700 rounded-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <Link to='/'>
            <button className='mr-2'>
                <img className=" h-10 w-auto" src={Bc} alt="Workflow"/>
            </button>
            </Link>
            <div className="font-mansalva text-white mr-6 cursor-default hover:text-yellow-400 transition duration-700 ease-in-out">ASIAN SUCRE</div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                
            </div>

            <span className={clicc ? 'w-auto bg-gray-700 absolute bottom-16 left-24 rounded-full py-2 px-4 z-10 text-white sm:hidden' :'w-auto bg-gray-700 absolute bottom-16 left-24 rounded-full py-2 px-4 z-10 text-white hidden sm:hidden'}>
                asiansucrefest@gmail.com
            </span>
            <div className="absolute gap-2 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="bg-gray-800 hidden sm:block h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-700 ease-in-out">
                <FontAwesomeIcon  icon={faEnvelope} size='lg' />
              </button>
              <button type="button" onClick={openEmail} className="bg-gray-800 sm:hidden h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-700 ease-in-out">
                <FontAwesomeIcon  icon={faEnvelope} size='lg' />
              </button>
              <div className="hidden sm:block font-bold text-white mr-6 cursor-default hover:text-yellow-400 transition duration-700 ease-in-out">asiansucrefest@gmail.com</div>
              <a href="https://www.facebook.com/As%C3%ADan-Sucre-Club-303054210189146" target="_blank">
              <button type="button" className="bg-gray-800 h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-700 ease-in-out">
              <FontAwesomeIcon  icon={faFacebook} size='lg' />
              </button>
              </a>
              <a href="https://www.instagram.com/asian_sucre_club/?hl=es-la" target="_blank">
              <button type="button" className=" bg-gray-800 h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-700 ease-in-out">
                <FontAwesomeIcon  icon={faInstagram} size='lg'/>
              </button>
              </a>
             {/*  <button type="button" className="ml-2  h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <FontAwesomeIcon  icon={faMoon} size='lg'/>
              </button>*/}
            
      
            </div>
          </div>
        </div>
      
      
      </nav>
    )
}

export default Foot
