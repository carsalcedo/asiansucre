import React, {useState} from 'react';
import FotoCard from './FotoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import maidcafe from '../assets/img/maidcafe.png';
import winter from '../assets/img/winter.png';
import hallow from '../assets/img/hallow.png';
import basara from '../assets/img/basara.png';
import {
    Link,
  } from "react-router-dom";
import ModalGal from './ModalGal';
import {Transition } from '@headlessui/react'

const GallerySection  = ({fotos, titulo}) => {
    const [open, setOpen] = useState(false);
    const [ima, setIma] = useState('');

    const openModal = (image) => {
        setIma(image);
        setOpen(true);
    };

    return (  
        <div className="container mx-auto my-20 px-4">
            <div className="flex gap-3 justify-center mb-2 md:justify-end md:mr-8" id='begin'>
                <Link to="/maidcafe">
                    <button className='hover:opacity-75'>
                        <img className='h-10 w-auto' src={maidcafe} alt="Workflow"/>
                    </button>
                </Link>
                <Link to="/winter" >
                    <button className='hover:opacity-75'>
                        <img className='h-10 w-auto' src={winter} alt="Workflow"/>
                    </button>
                </Link>
                <Link to="/basara" >
                    <button className='hover:opacity-75'>
                        <img className='h-10 w-auto' src={basara} alt="Workflow"/>
                    </button>
                </Link>
                <Link to="/halloween" >
                    <button className='hover:opacity-75'>
                        <img className='h-10 w-auto' src={hallow} alt="Workflow"/>
                    </button>
                </Link>
            </div>
            <h1 className='text-center mb-10 font-extrabold text-myColor hover:text-yellow-300 text-2xl'>{titulo}</h1>
            <div className=" px-5 grid grid-cols-2 md:px-20 md:grid-cols-5 gap-2">
            {fotos.map((foto) =>
               <FotoCard key={foto.id} foto={foto} openModal={openModal}/>
            )}
            </div>

            <div class="flex justify-end mt-1">
                <a href="#begin">
                    <button type="button" className="ml-2 bg-gray-800 h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <FontAwesomeIcon  icon={faArrowUp} size='lg'/>
                    </button>
                </a>
            </div>
          
            <Transition.Root show={open} as={'div'}>
                <ModalGal ima={ima} setOpen={setOpen}/>
           </Transition.Root>
          
        </div>
    );
}
 
export default GallerySection

