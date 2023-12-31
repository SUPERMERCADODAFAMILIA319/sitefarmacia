import Image from 'next/image';
import React from 'react';

const CustomMap = () => {
  const latitude = -15.8939869;
  const longitude = -48.1132804;
  const link = "https://acesse.one/C5VNd";

  return (
    <div style={{ position: 'relative' }}>
      <iframe
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.1}%2C${latitude - 0.1}%2C${longitude + 0.1}%2C${latitude + 0.1}&layer=mapnik`}
        title="Embedded Map"
        className="lg:w-[700px] lg:h-[500px] w-[80%] h-[300px] shadow-lg"   
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          top: '50%', // Ajuste a posição vertical conforme necessário
          left: '50%', // Ajuste a posição horizontal conforme necessário
          transform: 'translate(-50%, -50%)',
          zIndex: '1000',
        }}
      >
        <Image
          src="/images/logo.png"
          height={50}  
          width={100}
          alt="Logo"
        />
      </a>
    </div>
  );
};

export default CustomMap;

