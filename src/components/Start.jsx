import React, { Fragment } from 'react';
import CardP from './CardP';
import maidcafe from '../assets/img/maidcafe.png';
import winter from '../assets/img/winter.png';
import hallow from '../assets/img/hallow.png';
import basara from '../assets/img/basara.png';
import {
    Link
  } from "react-router-dom";
  import video from '../assets/img/video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {faGamepad} from '@fortawesome/free-solid-svg-icons'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
import {faMusic} from '@fortawesome/free-solid-svg-icons'


 const Start = () => {
    return (
        <div className='py-8 my-auto'>
            <h1 className='text-center my-20 font-mansalva font-extrabold text-white hover:text-yellow-300 text-5xl transition duration-700 ease-in-out'>
                EVENTOS ASIAN SUCRE
            </h1>
        <div className="my-10 flex flex-wrap -mx-2">
            <Link to="/maidcafe" className='w-1/2 lg:w-1/4'> 
                <div className="w-full px-2 my-2">
                    <CardP photo={maidcafe} titulo='Maids Café' />
                </div>
            </Link>
            <Link to="/winter" className='w-1/2 lg:w-1/4'> 
                <div className="w-full px-2 my-2">
                    <CardP photo={winter} titulo='Winter'/>
                </div>
            </Link>
            <Link to="/basara" className='w-1/2 lg:w-1/4'> 
                <div className="w-full px-2 my-2">
                    <CardP photo={basara} titulo='Basara Challenge' />
                </div>
            </Link>
            <Link to="/halloween" className='w-1/2 lg:w-1/4'> 
                <div className="w-full px-2 my-2">
                    <CardP photo={hallow} titulo='Halloweens Party' />
                </div>
            </Link>
        </div>

        <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-gradient-to-r from-yellow-300 to-yellow-500  rounded-xl border-4 border-red-600 sm:pb-8 md:pb-20 lg:max-w-2xl lg:w-full ">

                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="cursor-default block xl:inline text-black font-rale">ASIAN SUCRE:</span>
                            <span className="cursor-default block text-red-800  font-rale xl:inline hover:text-white transition duration-700 ease-in-out"> Evento de cultura otaku, gamer y kpop
                            </span>
                        </h1>
                        <p className="mt-3 font-rale text-base text-black  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                         Eventos que traen lo mejor del Asia a nuestra ciudad apra el disfrute de todo público en especial otakus, gamers y kpopers.  tiendas, comida, música, concursos, shows, videojuegos y mucho mas
                        </p>
                        <div className="mt-5 flex justify-center gap-2 sm:mt-8 sm:gap-4  lg:justify-start">
                            <Link to='/concursos' className="rounded-full text-lg shadow flex items-center justify-center px-4 py-4 border border-transparent text-white bg-red-600 hover:bg-white hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
                                <FontAwesomeIcon icon={faMicrophone} />
                            </Link>
                            <Link to='/shows' className="rounded-full text-lg shadow flex items-center justify-center px-4 py-3 border border-transparent text-white bg-red-600 hover:bg-white hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
                            <FontAwesomeIcon icon={faMusic} />
                            </Link>
                            <Link to='/maids' className="rounded-full text-lg shadow flex items-center justify-center px-4 py-4 border border-transparent text-white bg-red-600 hover:bg-white hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">                         
                                 <FontAwesomeIcon icon={faUtensils} />
                            </Link>
                            <Link to='/videogames' className="rounded-full text-lg shadow flex items-center justify-center px-3 py-4 border border-transparent text-white bg-red-600 hover:bg-white hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
                            <FontAwesomeIcon icon={faGamepad} />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="mt-2 lg:absolute lg:inset-y-4 lg:right-14 lg:w-2/6">
        <video controls loop className='w-auto h-auto rounded-xl'>
                <source src={video} type="video/mp4"  />
            </video>
        </div>
    </div>
        </div>
    )
}

export default Start