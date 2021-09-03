import React, { Fragment } from 'react';
import CardP from './CardP';
import maidcafe from '../assets/img/maidcafe.png';
import winter from '../assets/img/winter.png';
import hallow from '../assets/img/hallow.png';
import basara from '../assets/img/basara.png';
import {
    Link
  } from "react-router-dom";


 const Start = () => {
    return (
        <div className='py-8 my-auto'>
        <h1 className='text-center my-20 font-mansalva text-myColor hover:text-yellow-300 text-4xl'>Eventos Asian Sucre</h1>
        <div className="my-10 flex flex-wrap -mx-2">
            <Link to="/maidcafe" className='sm:w-1/2 lg:w-1/4'> 
                <div className="w-full px-2 my-2">
                    <CardP photo={maidcafe} titulo='Maids Café' />
                </div>
            </Link>
            <Link to="/winter" className='sm:w-1/2 lg:w-1/4'> 
                <div className="w-full px-2 my-2">
                    <CardP photo={winter} titulo='Winter'/>
                </div>
            </Link>
            <Link to="/basara" className='sm:w-1/2 lg:w-1/4'> 
                <div className="w-full px-2 my-2">
                    <CardP photo={basara} titulo='Basara Challenge' />
                </div>
            </Link>
            <Link to="/halloween" className='sm:w-1/2 lg:w-1/4'> 
                <div className="w-full px-2 my-2">
                    <CardP photo={hallow} titulo='Halloweens Party' />
                </div>
            </Link>
        </div>
        </div>
    )
}

export default Start