import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaystation} from '@fortawesome/free-brands-svg-icons'
import {faXbox} from '@fortawesome/free-brands-svg-icons'
import {faGamepad} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import game2 from '../assets/img/game3.jpg'
import banner from '../assets/img/banner.jpg'

const Games = () => {
    return (
<div className="container mx-auto my-20 px-4 relative  overflow-hidden rounded-lg bg-opacity-25 ">
<div class="mb-4">
  <img src={banner} alt="" className='object-cover h-48 w-full rounded-full' />
</div>
 <div class="relative bg-white overflow-hidden rounded-xl border-4 border-superGr-200">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-black sm:pb-8 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-32 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8"/>
     

      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="cursor-default block xl:inline text-white font-rale">ZONA GAMER</span>
            <span class="cursor-default block text-superPk-400 font-rale xl:inline hover:text-superGr-200 transition duration-700 ease-in-out"> diversion y competiciones</span>
          </h1>
          <p class="mt-3 font-rale text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Zona dedicada para todo publico amante de videojuegos y que quieran pasar un rato bien entretenido con la variedad de juegos que ofrecen nuestros eventos
            Bailes, peleas, carreras, shooters y mas!
          </p>
          <div class="mt-5 flex justify-center gap-2 sm:mt-8 sm:gap-4  lg:justify-start">
            <div class="rounded-full text-lg shadow flex items-center justify-center px-4 py-4 border border-transparent text-white bg-superPk-400 hover:bg-superGr-200 hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
            <FontAwesomeIcon icon={faPlaystation}  />
            </div>
            <div class="rounded-full text-lg shadow flex items-center justify-center px-4 py-4 border border-transparent text-white bg-superPk-400 hover:bg-superGr-200 hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
            <FontAwesomeIcon icon={faXbox}  />
            </div>
            <div class="rounded-full text-lg shadow flex items-center justify-center px-4 py-4 border border-transparent text-white bg-superPk-400 hover:bg-superGr-200 hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
            <FontAwesomeIcon icon={faGamepad} />
            </div>
            <div class="rounded-full text-lg shadow flex items-center justify-center px-4 py-4 border border-transparent text-white bg-superPk-400 hover:bg-superGr-200 hover:text-black transition duration-700 ease-in-out md:py-4  md:px-4 md:text-6x1">
            <FontAwesomeIcon icon={faLaptop} />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={game2} alt=""/>
  </div>
</div>
</div>
    )
}

export default Games
