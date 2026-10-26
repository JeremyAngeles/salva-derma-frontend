import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MejorVersion = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array con las 4 imágenes
  const images = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799600/oi9kvjsmby3ih66rcebj.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799600/juuoywkqnp452mjixddi.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799600/hxrd58x1spkuy7oa4l6y.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799601/nt4my33jykt6kvkcbjko.jpg'
  ];

  // Efecto para que el carrusel cambie automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#f9f9f9] overflow-hidden font-principal">
      
      {/* Contenedor general */}
      <div className="w-full pl-6 lg:pl-12 pr-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos y Botón con interlineado un poco más junto
            ========================================= */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full max-w-[540px] mx-auto lg:mx-0 lg:ml-36 xl:ml-52">
          
          <p className="text-[#88807a] text-[17px] md:text-[19px] font-light leading-[1.2] mb-5">
            Clínica con especialistas CERTIFICADOS<br />
            en dermatología, cirugía plástica, láser,<br />
            estética y expertos en faciales.
          </p>

          <h2 
            className="text-4xl md:text-5xl lg:text-[3.8rem] text-[#053d57] leading-[0.95] tracking-wide mb-5"
            style={{ fontFamily: 'Alta, serif' }}
          >
            <span className="font-light whitespace-nowrap">TU MEJOR VERSIÓN,</span><br />
            <span className="font-light">ESTÁ AÚN POR</span><br />
            <span className="font-normal">LLEGAR</span>
          </h2>
          
          <p className="text-[#88807a] text-[17px] md:text-[19px] font-light leading-[1.2] mb-10">
            Nuestros servicios son realizados por<br />
            especialistas altamente capacitados fuera<br />
            y dentro del país, y priorizamos el manejo<br />
            conjunto de ambas especialidades según<br />
            la necesidad del caso.
          </p>

          <div>
            <Link 
              to="/reservar-cita" 
              className="inline-block bg-gradient-to-r from-[#cdb3ae] to-[#e4d1cd] text-white px-12 py-4 rounded-full font-medium text-xl shadow-sm hover:shadow-md transition-all"
            >
              Reserva tu consulta
            </Link>
          </div>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Carrusel, figura celeste alta y bolitas abajo
            ========================================= */}
        <div className="lg:col-span-7 relative w-full h-[520px] md:h-[700px] lg:h-[760px]">
          
          {/* 1. FIGURA CELESTE DE FONDO */}
          <div className="absolute right-0 -top-10 -bottom-10 w-[72%] md:w-[66%] bg-[#7caebc] rounded-l-[3.5rem] md:rounded-l-[4.5rem] z-0"></div>

          {/* 2. IMÁGENES PRINCIPALES DEL CARRUSEL */}
          <div className="absolute right-0 top-0 w-[84%] md:w-[80%] h-full rounded-l-[3.5rem] md:rounded-l-[4.5rem] overflow-hidden shadow-2xl z-10 bg-[#f9f9f9]">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Clínica Instalaciones ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full object-cover bg-[#dcc4bc]' }}
              />
            ))}
          </div>

          {/* 3. PUNTOS DEL CARRUSEL */}
          <div className="absolute -bottom-16 right-0 w-[72%] md:w-[66%] h-[90px] flex justify-center pl-8 items-center gap-3 md:gap-4 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'w-3.5 h-3.5 md:w-4 md:h-4 bg-white scale-110 shadow-md' 
                    : 'w-3 h-3 md:w-3.5 md:h-3.5 bg-transparent border-[1.5px] border-white hover:bg-white/30'
                }`}
                aria-label={`Ver imagen ${index + 1} de la clínica`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MejorVersion;