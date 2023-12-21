"use client";

import Image from 'next/image';
import { useState } from 'react';

const Card = ({ name, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <div onClick={() => setOpen(false)} className='mb-3 border-[1px] shadow-2xl rounded-lg pt-3 lg:w-[100%] w-[80%] border-gray-400 flex flex-col items-center bg-red-500 hover:bg-red-600 px-6'>
          <header className='flex justify-evenly'>
            <p className='text-white font-bold'>{name}</p>
          </header>
          <div>
            <Image 
              src={image}
              alt="Image-empresa"
              width={300}
              height={150}
              className='rounded-[18px] py-4'
            />
            <p className='text-white'>Endereço: QN 319 Conjunto A, Lote 01 - <br /> Samambaia Sul, Brasília - DF</p>
            <p className='text-white pt-3 pb-5'>Contato: <a className='text-yellow-200 hover:text-yellow-400 font-bold' href='https://wa.me/5561999578360?text=Ol%C3%A1%2C+gostaria+de+verificar+as+promo%C3%A7%C3%B5es+deste+m%C3%AAs%21'>(61)9 9957-8360 </a>
            </p>
          </div>
        </div>
      ) : (
        <div onClick={() => setOpen(true)} className='mb-3 hover:text-white border-[1px] lg:w-[100%] w-[80%] pt-3 shadow-xl rounded-lg flex flex-col items-center hover:bg-red-500 border-gray-200 px-6'>
          <header className='flex '>
            <p className='font-bold'>{name}</p>
          </header>
          
          <div>
            <Image 
              src={image}
              alt="Image-empresa"
              width={300}
              height={150}
              className='rounded-3xl py-4'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
