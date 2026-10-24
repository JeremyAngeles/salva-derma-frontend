import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Fondos y fotos de la 4ta slide (Casos Antes y Después)
const CASOS = {
  cirugia: {
    titulo: 'CIRUGÍA PLÁSTICA',
    fondo: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800901/etaranfqn592fwr9comy.jpg',
    antes: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800644/civuwjoarnlsbdzmiuge.jpg',
    despues: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800644/brzx7jkec0vvrk9zdi4y.jpg',
  },
  dermatologia: {
    titulo: 'DERMATOLOGÍA',
    fondo: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800901/rzeqvroxrafsxqewyh23.jpg',
    antes: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800644/crnuepv4uxagetnkb2gh.png',
    despues: 'https://res.cloudinary.com/da47iihxz/image/upload/v1792800644/wsw0cigusl908ompmtct.png',
  },
};

// Tarjeta Antes / Después con deslizador (arrastra la barra para comparar)
const CardAntesDespues = ({ antes, despues }) => {
  const [pos, setPos] = useState(50); // % visible de la foto "Antes"
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
    <div className="w-full max-w-[360px] md:max-w-[480px] p-2 md:p-3 rounded-[1.75rem] md:rounded-[2.25rem] bg-white/25 backdrop-blur-sm border border-white/40 shadow-xl mx-auto">
      <div
        ref={contenedor}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        // touch-none evita que la pantalla haga scroll al arrastrar en celulares
        className="relative w-full aspect-[4/4] md:aspect-[4/4.5] rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden bg-white select-none cursor-ew-resize touch-none"
      >
        {/* Después (fondo completo, queda por debajo) */}
        <img 
          src={despues} 
          alt="Después" 
          draggable={false} 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />

        {/* Antes (se recorta desde la derecha hacia la izquierda según el % de "pos") */}
        <img
          src={antes}
          alt="Antes"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} 
        />

        {/* Degradado inferior para leer las etiquetas */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

        {/* Etiquetas */}
        <span className="absolute bottom-4 left-5 text-white text-lg md:text-xl font-medium drop-shadow-md pointer-events-none tracking-wide">
          Antes
        </span>
        <span className="absolute bottom-4 right-5 text-white text-lg md:text-xl font-medium drop-shadow-md pointer-events-none tracking-wide">
          Después
        </span>

        {/* Barra y botón deslizante */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-md pointer-events-none"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 3 12 9 18" />
              <polyline points="15 6 21 12 15 18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mitad de la slide 4 (fondo + título + tarjeta)
const MitadCaso = ({ data }) => (
  <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-start md:justify-center pt-8 md:pt-16 md:pb-24">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${data.fondo}')` }}
    ></div>
    
    {/* mt-4 md:mt-16 para subir ligeramente todo el bloque (antes era mt-6 md:mt-24) */}
    <div className="relative z-10 flex flex-col items-center w-full px-4 mt-4 md:mt-16">
      <h2
        // mb-6 md:mb-8 (antes era mb-10 md:mb-16) para acercar el card al título
        className="text-white text-[2.4rem] md:text-[3.2rem] lg:text-[4.2rem] leading-none tracking-wide mb-6 md:mb-8 drop-shadow-lg text-center"
        style={{ fontFamily: 'Alta, serif' }}
      >
        {data.titulo}
      </h2>
      <CardAntesDespues antes={data.antes} despues={data.despues} />
    </div>
  </div>
);

const Hero = () => {
  // Fondos de las slides 1-3. La slide 4 (index 3) se dibuja con su propio diseño dividido.
  const images = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792797855/wnc6nndtw6shqbvkiz7j.jpg', // Inicio (Logo Salvar)
    'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528706/cirujia.png', // +1000 Cirugías
    'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528706/derma.png', // Dermatología
    null, // Casos Antes y Después (diseño dividido)
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Slide 4 dura 30s, las demás 5s
    const delay = currentSlide === 3 ? 30000 : 5000;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [currentSlide, images.length]);

  return (
    <section className="relative w-full mb-32 md:mb-40 font-principal">
      {/* 1. Contenedor de la Imagen */}
      <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col justify-center items-center">
        {/* Fondos slides 1-3 */}
        {images.map((img, index) =>
          img ? (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            ></div>
          ) : null
        )}

        {/* SLIDE 4: Diseño dividido Cirugía Plástica | Dermatología */}
        <div
          className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-1000 ease-in-out ${
            currentSlide === 3 ? 'opacity-100 z-[15]' : 'opacity-0 -z-10 pointer-events-none'
          }`}
        >
          <MitadCaso data={CASOS.cirugia} />
          <MitadCaso data={CASOS.dermatologia} />
        </div>

        {/* Overlay oscuro (se quita en la slide 4 porque ya trae su propio diseño) */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-1000 pointer-events-none z-10 ${
            currentSlide === 3 ? 'opacity-0' : 'opacity-30'
          }`}
        ></div>

        {/* 2. Centro (Textos dinámicos según el slide) */}
        <div className="relative z-20 text-center text-white px-4 pb-12 md:pb-20 w-full flex flex-col items-center pointer-events-none">
          {/* SLIDE 1: Inicio (Logo) */}
          <div
            className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full ${
              currentSlide === 0 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
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
          <div
            className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full ${
              currentSlide === 1 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
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
          <div
            className={`transition-all duration-700 absolute flex flex-col items-center justify-center transform -translate-y-1/2 w-full ${
              currentSlide === 2 ? 'opacity-100 translate-y-0 relative' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
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

          {/* SLIDE 4: sin texto aquí, todo va en el diseño dividido de arriba */}
          <div
            className={`transition-all duration-700 absolute w-full h-[200px] ${
              currentSlide === 3 ? 'opacity-100 relative' : 'opacity-0 pointer-events-none'
            }`}
          ></div>
        </div>

        {/* 3. Puntitos del Carrusel */}
        <div className="absolute bottom-24 md:bottom-32 right-8 md:right-16 flex gap-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all border border-white/60 shadow-md ${
                index === currentSlide ? 'bg-white scale-125 border-white' : 'bg-transparent hover:bg-white/40'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* 4. Tarjeta Flotante Blanca Inferior */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] md:w-auto bg-white rounded-[2rem] md:rounded-[3rem] py-6 px-8 md:px-20 flex flex-col md:flex-row items-center justify-center shadow-2xl gap-8 md:gap-20 z-40">
        
        <div className="flex items-center gap-4 md:gap-6">
          <span
            className="text-5xl md:text-[3.5rem] font-bold text-gray-500 tracking-tighter"
            style={{ fontFamily: 'Alta, serif' }}
          >
            +1000
          </span>
          <div className="flex flex-col text-left">
            <span className="text-xl md:text-2xl font-semibold text-gray-600 leading-none mb-1">Pacientes</span>
            <span className="text-sm md:text-base font-light text-gray-400 leading-tight">
              confían en<br />nosotros
            </span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] h-20 bg-gray-300"></div>

        <div className="flex items-center gap-4 md:gap-6">
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