// components/Footer.js
import Image from 'next/image';
import React from 'react';

import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#EE1B24] text-white p-4 sm:w-full">
        <div className="flex flex-col md:flex-row md:justify-center gap-2 sm:w-full">
          <div className="mb-4 md:mb-0 text-center md:text-left mx-auto">
            <Image
              src="/images/logo.png"
              height={60}
              width={250}
              alt="Logo"
              className='rounded-lg mb-3'
            />
            <a href='/compreonline' >
              <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white  px-4 py-2 rounded-xl  md:w-11/12 w-full">
                Compre Online

              </button>
            </a>
          </div>

          <div className="mb-4 md:mb-0 text-center md:text-left mx-auto">
            <h2 className="text-lg md:text-xl font-bold mb-2">Horário de Funcionamento</h2>
            <hr className="my-2 border-blue-400 border" />
            <p>Segunda a sábado das 08:00h às 20:00h</p>
            <p>Feriados das 08:00h às 14:00h</p>
          </div>

          <div className="mb-4 md:mb-0 text-center md:text-left mx-auto">
            <h2 className="text-lg md:text-xl font-bold mb-2">Receba ofertas no seu WhatsApp</h2>
            <hr className="my-2 border-blue-400 border" />
            <p>Envie mensagem para  <a className='text-yellow-400 hover:text-yellow-300' href='https://wa.me/5561999578360?text=Ol%C3%A1%2C+gostaria+de+verificar+as+promo%C3%A7%C3%B5es+deste+m%C3%AAs%21'>(61) 9 9957-8360 </a> e <br /> receba nossos encartes no seu smartphone.</p>
          </div>

          <div className="mb-4 md:mb-0 text-center md:text-left mx-auto">
            <h2 className="text-lg md:text-xl font-bold mb-2">Supermercado nas Redes Sociais</h2>
            <hr className="my-2 border-blue-400 border" />
            <p className='pb-2'>Curta nossas páginas</p>

            <div className="flex flex-col space-y-2">
              <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded flex justify-center items-center">
                <FaInstagram className='mr-2' /><a target="_blank" href='https://www.instagram.com/farmaciadotrabalhador319/'>Instagram</a>
              </button>
              <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded flex justify-center items-center">
                <FaFacebook className='mr-2' /><a target="_blank" href='https://www.facebook.com/profile.php?id=61554251468081'>Facebook</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-red-500 py-4 flex items-center justify-center'>
        <p className='text-white text-[10px] font-bold'>Todos direitos reservados a Farmácia do Trabalhador da Familia</p>
      </div>
    </footer>
  );
};

export default Footer;
