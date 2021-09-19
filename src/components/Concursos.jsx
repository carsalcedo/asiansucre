import React from 'react'
import video from '../assets/img/video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {faDice} from '@fortawesome/free-solid-svg-icons'
import {faChessKnight} from '@fortawesome/free-solid-svg-icons'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import concurso1 from '../assets/img/concurso1.jpg'
import concurso2 from '../assets/img/concurso2.jpg'
import concurso3 from '../assets/img/concurso3.jpg'
import concurso4 from '../assets/img/concurso4.jpg'
import concurso5 from '../assets/img/concurso5.jpg'

const Concursos = () => {
    return (
 <div className="container mx-auto my-20 px-4 relative  overflow-hidden rounded-lg bg-opacity-25 ">
        
    <div class="relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-gradient-to-r from-yellow-300 to-yellow-500  rounded-xl border-4 border-red-600 sm:pb-8 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-32 xl:pb-32">

                <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span class="cursor-default block xl:inline text-black font-rale">CONCURSOS:</span>
                            <span class="cursor-default block text-red-800  font-rale xl:inline hover:text-white transition duration-700 ease-in-out"> Retos y demostración de talentos
                            </span>
                        </h1>
                        <p class="mt-3 font-rale text-base text-black  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Cada evento Asian Sucre ha sido lugar de surgiemiento de grandes talentos, ansiosos y ferviertes por querer surgir.  oportunidad grandiosa
                        para que cada quien tenga la oportunidad de destacar y ganar espectaculares premios.
                        </p>
                        <div class="mt-5 flex justify-center gap-2 sm:mt-8 sm:gap-4  lg:justify-start">
                            <div class="rounded-full text-lg shadow flex items-center justify-center px-4 py-2 border border-transparent text-white bg-red-600 hover:bg-white hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
                                <FontAwesomeIcon icon={faMicrophone} />
                            </div>
                            <div class="rounded-full text-lg shadow flex items-center justify-center px-3 py-3 border border-transparent text-white bg-red-600 hover:bg-white hover:text-black transition duration-700 ease-in-out md:py-4  md:px-3 md:text-6x1">
                                <FontAwesomeIcon icon={faDice} />
                            </div>
                            <div class="rounded-full text-lg shadow flex items-center justify-center px-4 py-4 border border-transparent text-white bg-red-600 hover:bg-white hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
                                 <FontAwesomeIcon icon={faChessKnight} />
                            </div>
                            <div class="rounded-full text-lg shadow flex items-center justify-center px-4 py-4 border border-transparent text-white bg-red-600 hover:bg-white hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
                                <FontAwesomeIcon icon={faMusic} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div class="mt-2 lg:absolute lg:inset-y-10 lg:right-14 lg:w-2/6">
        <img src={concurso5} alt="" className='rounded-xl' />
        </div>
    </div>
        
    <div className='mt-10 max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-4 sm:px-6  lg:max-w-7xl lg:px-8 lg:grid-cols-2'>
        <div className='flex justify-center'>
            <img src={concurso1} alt="" className='w-auto h-full rounded-xl border-4 border-red-600' />
        </div>
        <div className='bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-red-500 hover:to-red-700  rounded-xl border-4 border-red-600  p-4 text-black transition duration-700 ease-in-out'>
            <h1 className='my-4 text-4xl tracking-tight font-extrabold text-red-800 hover:text-yellow-500 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>Trivias</h1>
            <p className='font-rale cursor-default text-black hover:text-white transition duration-700 ease-in-out'>Trivias para poner a prueba el conocimiento de cada otaky y fan de los comics y videojuegos</p>
        </div>
    </div>    
    <div className='mt-4 max-w-2xl mx-auto  px-4 grid items-center grid-cols-1 gap-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2'>
    <div className='bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-red-500 hover:to-red-700  rounded-xl border-4 border-red-600  p-4 text-black transition duration-700 ease-in-out'>
            <h1 className='my-4 text-4xl tracking-tight font-extrabold text-red-800 hover:text-yellow-500 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>Karaoke</h1>
            <p className='font-rale cursor-default text-black hover:text-white transition duration-700 ease-in-out'>Competencia de karaoke donde pueden interptretar el tema de su preferencia, Opening, ending, kpop, o cual mas prefieran. Gana la mejor voz e interpretación</p>
        </div>
        <div className='flex justify-center'>
            <img src={concurso2} alt="" className='w-auto h-full rounded-xl border-4 border-red-600' />
        </div>
    </div>  
    <div className='mt-4 max-w-2xl mx-auto  px-4 grid items-center grid-cols-1 gap-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2'>
    <div className='flex justify-center'>
            <img src={concurso3} alt="" className='w-auto h-full rounded-xl border-4 border-red-600' />
        </div>
        <div className='bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-red-500 hover:to-red-700  rounded-xl border-4 border-red-600  p-4 text-black transition duration-700 ease-in-out'>
            <h1 className='my-4 text-4xl tracking-tight font-extrabold text-red-800 hover:text-yellow-500 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>Corncursos para Otakus</h1>
            <p className='font-rale cursor-default text-black hover:text-white transition duration-700 ease-in-out'>Variedad de concursos solo para otakus: Advina el opening, Jan-Ken_pon, Adivina el personaje y mucho mas</p>
        </div>
    </div>   
    <div className='mt-4 gap-y-2 max-w-2xl mx-auto px-4 grid items-center grid-cols-1 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-red-500 hover:to-red-700  rounded-xl border-4 border-red-600  p-4 text-black text-center transition duration-700 ease-in-out'>
            <h1 className='my-4 text-4xl tracking-tight font-extrabold text-red-800 hover:text-yellow-500 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>¿Quien se cree mas Otaku?</h1>
            <p className='font-rale cursor-default text-black hover:text-white transition duration-700 ease-in-out'>Concurso al estilo ¿Quien quiere ser Millornario? para elegir al otaku con culto</p>
        </div>
        <div className='flex justify-center'>
            <img src={concurso4} alt="" className='w-full rounded-xl border-4 border-red-600' />
        </div>
    </div>   
        
 </div>
    )
}

export default Concursos
