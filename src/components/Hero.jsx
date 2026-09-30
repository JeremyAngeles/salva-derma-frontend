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
    <section className="relative w-full mb-32 md:mb-40">
      
      {/* 1. Contenedor de la Imagen: Altura incrementada a 95vh y min-h-[850px] para que sea mucho más largo */}
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

        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

        {/* 2. Textos centrados (Ligeramente subidos con pb-12 para compensar visualmente el espacio de la tarjeta) */}
        <div className="relative z-20 text-center text-white px-4 pb-12 md:pb-20">
          <h1 className="text-6xl md:text-8xl font-bold flex flex-col md:flex-row items-center justify-center gap-2 mb-0">
            <span className="text-7xl md:text-9xl font-light">@</span>
            SALVAR
          </h1>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8 md:mb-12">
            Dermatoplástica
          </h2>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Todo lo que buscas para tu piel,<br />
            <strong className="font-semibold">EN UN SOLO LUGAR</strong>
          </p>
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
          <span className="text-5xl md:text-[3.5rem] font-bold text-gray-500 tracking-tighter">+1000</span>
          <div className="flex flex-col text-left">
            <span className="text-xl md:text-2xl font-semibold text-gray-600 leading-none mb-1">Pacientes</span>
            <span className="text-sm md:text-base font-light text-gray-400 leading-tight">confían en<br/>nosotros</span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] h-20 bg-gray-300"></div>

        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-5xl md:text-[3.5rem] font-bold text-gray-500 tracking-tighter">+6</span>
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