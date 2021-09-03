import React from 'react'

const CardP = ({photo, titulo}) => {
    return (
        <div className='bg-transparent' id='logoCard'>
            <img src={photo} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-yellow-300 hover:text-yellow-500">{titulo}</div>
            </div>
            
        </div>
    )
}

export default CardP