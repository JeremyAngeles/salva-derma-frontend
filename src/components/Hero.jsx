import { useState, useEffect, useRef } from 'react';

const CASOS = {
  cirugia: {
    titulo: 'CIRUGÍA PLÁSTICA',
    fondo: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800901/rzeqvroxrafsxqewyh23.jpg',
    antes: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800644/crnuepv4uxagetnkb2gh.png',
    despues: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800644/wsw0cigusl908ompmtct.png',
  },
  dermatologia: {
    titulo: 'DERMATOLOGÍA',
    fondo: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800901/etaranfqn592fwr9comy.jpg',
    antes: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800644/civuwjoarnlsbdzmiuge.jpg',
    despues: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800644/brzx7jkec0vvrk9zdi4y.jpg',
  },
};

const CardAntesDespues = ({ antes, despues }) => {
  const [pos, setPos] = useState(50); 
  const contenedor = useRef(null);
  const arrastrando = useRef(false);

  const mover = (clientX) => {
    if (!contenedor.current) return;
    const rect = contenedor.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  };

  const onPointerDown = (e) => {
    arrastrando.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    mover(e.clientX);
  };
  const onPointerMove = (e) => {
    if (arrastrando.current) mover(e.clientX);
  };
  const onPointerUp = () => {
    arrastrando.current = false;
  };

  return (
    <div className="w-full max-w-[155px] sm:max-w-[240px] md:max-w-[330px] lg:max-w-[480px] p-1 sm:p-2 lg:p-3 rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2.25rem] bg-white/25 backdrop-blur-sm border border-white/40 shadow-xl mx-auto z-10 relative">
      <div
        ref={contenedor}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative w-full aspect-[4/4] lg:aspect-[4/4.5] rounded-[0.8rem] sm:rounded-[1.2rem] lg:rounded-[1.75rem] overflow-hidden bg-white select-none cursor-ew-resize touch-none"
      >
        <img 
          src={despues} 
          alt="Después" 
          draggable={false} 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />
        <img
          src={antes}
          alt="Antes"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} 
        />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

        <span 
          className="absolute bottom-1.5 sm:bottom-3 lg:bottom-4 left-2 sm:left-4 lg:left-5 text-white text-[0.7rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.8rem] drop-shadow-md pointer-events-none tracking-widest uppercase transition-opacity duration-300"
          style={{ fontFamily: 'Alta, serif', opacity: pos < 35 ? 0 : 1 }}
        >
          ANTES
        </span>
        <span 
          className="absolute bottom-1.5 sm:bottom-3 lg:bottom-4 right-2 sm:right-4 lg:right-5 text-white text-[0.7rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.8rem] drop-shadow-md pointer-events-none tracking-widest uppercase transition-opacity duration-300"
          style={{ fontFamily: 'Alta, serif', opacity: pos > 65 ? 0 : 1 }}
        >
          DESPUÉS
        </span>

        <div
          className="absolute top-0 bottom-0 w-[2px] lg:w-[3px] bg-white shadow-md pointer-events-none"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-700">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 3 12 9 18" />
              <polyline points="15 6 21 12 15 18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const MitadCaso = ({ data }) => (
  <div className="relative w-1/2 h-full flex flex-col items-center justify-center pt-4 sm:pt-8 lg:pt-16 pb-6 sm:pb-12 lg:pb-24">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${data.fondo}')` }}
    ></div>
    
    <div className="relative z-10 flex flex-col items-center w-full px-2 sm:px-4 mt-2 sm:mt-6 lg:mt-16">
      <h2
        className="text-white text-[1rem] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[4.2rem] leading-none tracking-wide mb-2 sm:mb-3 lg:mb-5 drop-shadow-lg text-center transform translate-y-1 sm:translate-y-2 lg:translate-y-4"
        style={{ fontFamily: 'Alta, serif' }}
      >
        {data.titulo}
      </h2>
      <CardAntesDespues antes={data.antes} despues={data.despues} />
    </div>
  </div>
);

const Hero = () => {
  const images = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793047594/bozlcxwdrpag7blq02i7.jpg',
    'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528706/cirujia.png',
    'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528706/derma.png',
    null,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const delay = currentSlide === 3 ? 30000 : 5000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [currentSlide, images.length]);

  return (
    <section className="relative w-full mb-20 sm:mb-28 lg:mb-40 font-principal">
      <div className="relative w-full h-[80vh] sm:h-[75vh] md:h-[70vh] lg:h-[90vh] min-h-[650px] lg:min-h-[800px] rounded-b-[1.75rem] sm:rounded-b-[3rem] lg:rounded-b-[5rem] overflow-hidden flex flex-col justify-center items-center">
        
        {images.map((img, index) =>
          img ? (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            ></div>
          ) : null
        )}

        <div
          className={`absolute inset-0 flex flex-row transition-opacity duration-1000 ease-in-out ${
            currentSlide === 3 ? 'opacity-100 z-[15]' : 'opacity-0 -z-10 pointer-events-none'
          }`}
        >
          <MitadCaso data={CASOS.cirugia} />
          <MitadCaso data={CASOS.dermatologia} />
        </div>

        <div className="relative z-20 text-center text-white px-4 pb-6 sm:pb-12 lg:pb-20 w-full flex flex-col items-center pointer-events-none">
          <div
            className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full mt-14 sm:mt-24 md:mt-36 lg:mt-[18rem] ${
              currentSlide === 0 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <img
              src="/logo-salva.png"
              alt="Salvar Dermatoplástica"
              className="w-auto h-10 sm:h-16 md:h-24 lg:h-40 object-contain mb-2 sm:mb-5 lg:mb-12 drop-shadow-2xl"
            />
            <h1
              className="text-xs sm:text-lg md:text-2xl lg:text-4xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Todo lo que buscas para tu piel,<br />
              <strong className="font-semibold tracking-wider">
                EN UN SOLO LUGAR
              </strong>
            </h1>
          </div>

          <div
            className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full mt-10 sm:mt-16 md:mt-24 lg:mt-32 ${
              currentSlide === 1 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <h3 className="text-white text-[0.75rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.8rem] font-light tracking-wide mb-1 sm:mb-2 lg:mb-4 drop-shadow-md">
              Hemos realizado
            </h3>
            <h2
              className="text-white text-[1.8rem] sm:text-[3rem] md:text-[4.2rem] lg:text-[6.5rem] leading-none tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'Alta, serif' }}
            >
              +1000 CIRUGÍAS
            </h2>
          </div>

          <div
            className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full -mt-2 sm:-mt-4 lg:-mt-6 ${
              currentSlide === 2 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <h2
              className="text-white text-[1.5rem] sm:text-[2.6rem] md:text-[3.8rem] lg:text-[6rem] leading-[1.05] tracking-wide mb-1 sm:mb-2 lg:mb-3 drop-shadow-lg text-center"
              style={{ fontFamily: 'Alta, serif' }}
            >
              DERMATOLOGÍA<br />
              CLÍNICA Y ESTÉTICA
            </h2>
            <p className="text-white text-[0.75rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.9rem] font-light tracking-wide drop-shadow-md text-center">
              Conoce más de nuestra unidad Dermoláser.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 sm:bottom-14 md:bottom-20 lg:bottom-32 right-4 sm:right-8 md:right-12 lg:right-16 flex gap-2 sm:gap-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3.5 lg:h-3.5 rounded-full transition-all border border-white/60 shadow-md ${
                index === currentSlide ? 'bg-white scale-125 border-white' : 'bg-transparent hover:bg-white/40'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[92%] sm:w-[85%] md:w-[750px] lg:w-[850px] bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] py-3 sm:py-5 lg:py-6 px-3 sm:px-6 md:px-0 flex flex-row items-center justify-center shadow-2xl z-40">
        <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3 md:gap-4 flex-1 pr-2 sm:pr-6 md:pr-10">
          <span
            className="text-[1.6rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-[#7b7a7a] tracking-tight leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            +1000
          </span>
          <div className="flex flex-col text-left justify-center mt-0.5 lg:mt-1">
            <span 
              className="text-[0.75rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-bold text-[#7b7a7a] leading-none mb-0.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Pacientes
            </span>
            <span 
              className="text-[0.65rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-light text-[#9b9b9b] leading-[1.1]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              confían en<br />nosotros
            </span>
          </div>
        </div>

        <div className="block w-[1px] md:w-[1.5px] h-10 sm:h-14 lg:h-20 bg-[#a6a6a6] shrink-0"></div>

        <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 flex-1 pl-3 sm:pl-8 md:pl-20">
          <span
            className="text-[1.6rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-[#7b7a7a] tracking-tight leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            +6
          </span>
          <div className="flex flex-col text-left justify-center mt-0.5 lg:mt-1">
            <span 
              className="text-[0.75rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-bold text-[#7b7a7a] leading-none mb-0.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Años
            </span>
            <span 
              className="text-[0.65rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-light text-[#9b9b9b] leading-[1.1]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              de experiencia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;