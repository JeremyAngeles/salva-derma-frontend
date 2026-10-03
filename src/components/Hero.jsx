import { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    '/fondo-hero-1.png',
    '/fondo-hero-1.png',
    '/fondo-hero-1.png',
    '/fondo-hero-1.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    // Agregamos font-principal para asegurar que Montserrat sea la base general
    <section className="relative w-full mb-32 md:mb-40 font-principal">
      
      {/* 1. Contenedor de la Imagen */}
      <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col justify-center items-center">
        
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}

        {/* Overlay oscuro para que el logo y letras resalten más */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        {/* 2. Centro (Logo + Texto) */}
        <div className="relative z-20 text-center text-white px-4 pb-12 md:pb-20 w-full flex flex-col items-center">
          
          {/* EL LOGO (reemplaza al texto anterior) */}
          <img 
            src="/logo-salva.png" 
            alt="Salvar Dermatoplástica" 
            className="w-auto h-20 md:h-32 lg:h-40 object-contain mb-8 md:mb-12 drop-shadow-2xl" 
          />
          
          {/* TÍTULO PRINCIPAL (Aplicamos la fuente Alta a la frase) */}
          <h1 
            className="text-2xl md:text-4xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            style={{ fontFamily: 'Alta, serif' }}
          >
            Todo lo que buscas para tu piel,<br />
            {/* Obligamos a que esta parte en negrita vuelva a Montserrat */}
            <strong className="font-semibold tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              EN UN SOLO LUGAR
            </strong>
          </h1>
          
        </div>

        {/* 3. Puntitos del Carrusel */}
        <div className="absolute bottom-20 md:bottom-32 right-8 md:right-16 flex gap-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-110' : 'bg-white bg-opacity-40 hover:bg-opacity-70'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Hero;