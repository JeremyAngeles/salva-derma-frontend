import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Las 4 imágenes de fondo correspondientes a cada sección del carrusel
  const images = [
    '/fondo-hero-1.png', // Imagen de Inicio (Logo Salvar)
    'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528706/cirujia.png', // Imagen +1000 Cirugías
    'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528706/derma.png', // Imagen Dermatología
    'https://res.cloudinary.com/cgfzvuli/image/upload/v1792530955/casosss2.png', // Imagen Casos Antes y Después (Ya viene con su título)
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
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

        {/* Overlay oscuro (Lo hacemos dinámico: en la imagen 4 lo quitamos porque ya trae diseño propio) */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-1000 z-10 ${currentSlide === 3 ? 'opacity-0' : 'opacity-30'}`}></div>

        {/* 2. Centro (Textos dinámicos según el slide) */}
        <div className="relative z-20 text-center text-white px-4 pb-12 md:pb-20 w-full flex flex-col items-center">
          
          {/* SLIDE 1: Inicio (Logo) */}
          <div className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full ${currentSlide === 0 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <img 
              src="/logo-salva.png" 
              alt="Salvar Dermatoplástica" 
              className="w-auto h-20 md:h-32 lg:h-40 object-contain mb-8 md:mb-12 drop-shadow-2xl" 
            />
            <h1 
              className="text-2xl md:text-4xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
              style={{ fontFamily: 'Alta, serif' }}
            >
              Todo lo que buscas para tu piel,<br />
              <strong className="font-semibold tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                EN UN SOLO LUGAR
              </strong>
            </h1>
          </div>

          {/* SLIDE 2: Cirugías (+1000) */}
          <div className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full ${currentSlide === 1 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <h3 className="text-white text-[1.4rem] md:text-[1.8rem] font-light tracking-wide mb-2 md:mb-4 drop-shadow-md">
              Hemos realizado
            </h3>
            <h2 
              className="text-white text-[3.8rem] md:text-[5.5rem] lg:text-[6.5rem] leading-none tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'Alta, serif' }}
            >
              +1000 CIRUGÍAS
            </h2>
          </div>

          {/* SLIDE 3: Dermatología */}
          <div className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full ${currentSlide === 2 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <h2 
              className="text-white text-[3.2rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] tracking-wide mb-4 drop-shadow-lg"
              style={{ fontFamily: 'Alta, serif' }}
            >
              DERMATOLOGÍA<br />
              CLÍNICA Y ESTÉTICA
            </h2>
            <p className="text-white text-[1.1rem] md:text-[1.4rem] font-light tracking-wide drop-shadow-md">
              Conoce más de nuestra unidad Dermoláser.
            </p>
          </div>

          {/* SLIDE 4: Casos (Vacío porque el texto ya viene en la imagen, solo lo dejamos para que ocupe el espacio) */}
          <div className={`transition-all duration-700 absolute w-full h-[200px] ${currentSlide === 3 ? 'opacity-100 relative' : 'opacity-0 pointer-events-none'}`}>
            {/* Aquí no ponemos texto porque 'casosss2.png' ya lo incluye */}
          </div>
          
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

      {/* 4. Tarjeta Flotante Blanca */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] md:w-auto bg-white rounded-[2rem] md:rounded-[3rem] py-6 px-8 md:px-20 flex flex-col md:flex-row items-center justify-center shadow-2xl gap-8 md:gap-20 z-40">
        
        <div className="flex items-center gap-4 md:gap-6">
          {/* Números grandes con fuente Alta */}
          <span 
            className="text-5xl md:text-[3.5rem] font-bold text-gray-500 tracking-tighter"
            style={{ fontFamily: 'Alta, serif' }}
          >
            +1000
          </span>
          <div className="flex flex-col text-left">
            <span className="text-xl md:text-2xl font-semibold text-gray-600 leading-none mb-1">Pacientes</span>
            <span className="text-sm md:text-base font-light text-gray-400 leading-tight">confían en<br/>nosotros</span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] h-20 bg-gray-300"></div>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Números grandes con fuente Alta */}
          <span 
            className="text-5xl md:text-[3.5rem] font-bold text-gray-500 tracking-tighter"
            style={{ fontFamily: 'Alta, serif' }}
          >
            +6
          </span>
          <div className="flex flex-col text-left">
            <span className="text-xl md:text-2xl font-semibold text-gray-600 leading-none mb-1">Años</span>
            <span className="text-sm md:text-base font-light text-gray-400 leading-tight">de experiencia</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;