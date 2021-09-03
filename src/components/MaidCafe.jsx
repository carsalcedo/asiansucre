import React, {useState} from 'react';
import ModalGal from './ModalGal';
import { Transition } from '@headlessui/react'
import alex from '../assets/img/recorte2.png'
import entrada from '../assets/img/maid7.jpg'
import madR from '../assets/img/recorte5.png'



const MaidCafe = ({fotos}) => {
    const features = [
        { name: 'Dangos', description: 'Bolitas dulces de arroz, famosas por servirse en palillos como torchetas' },
        { name: 'Ramen', description: 'Delicioso caldo de pollo, de carne o de cerdo, con fideos, vegetales y trozos de carne' },
        { name: 'Onigiris', description: 'Bolas de Arroz rellenas con pescado, delcisiosas con crema' },
        { name: 'Lumpias', description: 'Maravillas crocantes rellenos con vegetales y carne' },
        { name: 'Dunplins', description: 'Bollos rellenos de carne o pollo al estilo Kung Fu Panda' },
        { name: 'Pockys', description: 'Galletas en forma de palillos cubiertos de chocolate' },
      ]

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [ima, setIma] = useState('');

    const openModal = (image) => {
        setIma(image);
        setOpen(true);
    };
    const openModal2 = () => {
        setOpen2(true);
    };


    return (
     
    <div className="container mx-auto my-20 px-4 relative  overflow-hidden rounded-lg bg-opacity-25 ">
        <div className='py-4 px-4 grid grid-cols-1 gap-y-2 lg:grid-cols-2'>
          <h1 className='z-10 flex justify-center text-2xl font-mansalva font-extrabold  text-white hover:text-yellow-500 sm:text-5xl lg:justify-end transition duration-700 ease-in-out'>¡BIENVENIDO AMO!</h1>
         <div className='flex justify-center'>
         <img src={madR} alt="" className='w-80 lg:w-96' />
         </div>
          
      </div>
      <div className="max-w-2xl mx-auto py-12 px-4 grid items-center grid-cols-1 gap-y-12 gap-x-8 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl border-b-8 w-auto border-black font-extrabold tracking-tight text-white hover:text-yellow-500 sm:text-5xl transition duration-700 ease-in-out">Aperitivos Japoneses</h2>
          <p className="cursor-default font-rale bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg p-3 mt-4 text-black hover:from-red-500 hover:to-red-700 hover:text-white transition duration-700 ease-in-out">
            En los eventos Asian Sucre siempre ofrecimos delicisos aperitivos originarios de Japón en nuestro Maid´s Café, servidos
            en su mesa por bellisimas Maids, junto a su buen Café o Té verde.
          </p>

          <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-black rounded-lg p-4 text-black hover:text-white bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-red-500 hover:to-red-700 transition duration-700 ease-in-out ">
                <dt className="font-lg font-rale cursor-default">{feature.name}</dt>
                <dd className="mt-2 text-sm font-rale cursor-default ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 lg:pt-16">
          {fotos.map((foto) =>( 
          <img
            key={foto.id}
            src={foto.image}
            onClick={() => openModal(foto.image)} 
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg cursor-pointer w-screen ring-4 ring-yellow-500 hover:opacity-75 transition duration-700 ease-in-out"
         />
         ))} 
        </div>
      </div>

      <div className='p-4' onClick={() => openModal2()} >
          <img src={entrada} alt="" className='object-cover  w-full rounded-2xl ring-4 ring-yellow-500' />
      </div>
      
      <Transition.Root show={open2} as={'div'}>
                <ModalGal ima={entrada} setOpen={setOpen2}/>
           </Transition.Root>
      <Transition.Root show={open} as={'div'}>
                <ModalGal ima={ima} setOpen={setOpen}/>
           </Transition.Root>
    </div>
     
    )
}

export default MaidCafe
