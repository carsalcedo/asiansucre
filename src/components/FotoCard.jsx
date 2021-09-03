import React from 'react'

 const FotoCard = ({foto, openModal}) => {
    return (
        <div onClick={() => openModal(foto.image)} className='bg-transparent cursor-pointer' id='fotoGal'>
            <img src={foto.image} alt="" className='w-full' />
        </div>
    )
}

export default FotoCard
