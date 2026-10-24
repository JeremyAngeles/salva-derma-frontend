import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MejorVersion = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array con las 4 imágenes que me pasaste
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
    <section className="relative w-full py-20 md:py-28 bg-[#f9f9f9] overflow-hidden font-principal flex justify-center">
      
      {/* Contenedor principal alineado */}
      <div className="relative z-10 w-full max-w-[1200px] pl-6 lg:pl-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos y Botón
            ========================================= */}
        <div className="flex flex-col justify-center h-full max-w-[440px] pr-6 lg:pr-0">
          
          <p className="text-[#88807a] text-[15px] md:text-[16px] font-light leading-relaxed mb-4">
            Clínica con especialistas CERTIFICADOS<br />
            en dermatología, cirugía plástica, láser,<br />
            estética y expertos en faciales.
          </p>

          <h2 
            className="text-4xl md:text-5xl lg:text-[3.2rem] text-[#053d57] leading-[0.95] tracking-wide mb-4"
            style={{ fontFamily: 'Alta, serif' }}
          >
            <span className="font-light whitespace-nowrap">TU MEJOR VERSIÓN,</span><br />
            <span className="font-light">ESTÁ AÚN POR</span><br />
            <span className="font-normal">LLEGAR</span>
          </h2>
          
          <p className="text-[#88807a] text-[15px] md:text-[16px] font-light leading-relaxed mb-8">
            Nuestros servicios son realizados por<br />
            especialistas altamente capacitados fuera<br />
            y dentro del país, y priorizamos el manejo<br />
            conjunto de ambas especialidades según<br />
            la necesidad del caso.
          </p>

          <div>
            <Link 
              to="/reservar-cita" 
              className="inline-block bg-gradient-to-r from-[#cdb3ae] to-[#e4d1cd] text-white px-10 py-3.5 rounded-full font-medium text-lg shadow-sm hover:shadow-md transition-all"
            >
              Reserva tu consulta
            </Link>
          </div>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Imagen superpuesta al fondo celeste (CARRUSEL)
            ========================================= */}
        <div className="relative w-full h-[450px] md:h-[650px]">
          
          {/* 1. FIGURA CELESTE DE FONDO */}
          <div className="absolute right-0 top-0 w-[70%] md:w-[65%] h-full bg-[#7caebc] rounded-l-[2.5rem] md:rounded-l-[3.5rem] z-0"></div>

          {/* 2. IMÁGENES PRINCIPALES (Con animación de fundido cruzado) */}
          <div className="absolute left-0 top-[10%] w-[90%] md:w-[92%] h-[80%] rounded-l-[2.5rem] md:rounded-l-[3.5rem] overflow-hidden shadow-2xl z-10 bg-[#f9f9f9]">
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

          {/* 3. PUNTOS DEL CARRUSEL (Clickeables) */}
          <div className="absolute bottom-0 right-0 w-[70%] md:w-[65%] h-[10%] flex justify-center items-center gap-3 md:gap-4 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'w-3 h-3 md:w-3.5 md:h-3.5 bg-white scale-110' 
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