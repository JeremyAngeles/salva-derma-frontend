import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SkinLounge = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalCarouselImages = 4;

  // 1. Estado y Referencia para el carrusel de testimonios (solo móvil)
  const testimonialRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Me animé a vivir esta experiencia porque está diseñada por especialistas en dermatología y cirugía plástica."
    },
    {
      id: 2,
      text: "Me encantó porque va más allá de una simple limpieza, también se enfocaron en un momento de relajación y cuidado integral de mi piel."
    },
    {
      id: 3,
      text: "Lo mejor fue el catering, la aromaterapia y los masajitos en mis hombros. Además de los productos 100% dermatológicos que usaron en mi piel."
    }
  ];

  // 2. Efecto para que los testimonios pasen cada 3 segundos (SOLO EN CELULAR)
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768 && testimonialRef.current) {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        setCurrentTestimonial(nextIndex);
        
        const cardWidth = testimonialRef.current.offsetWidth;
        testimonialRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth'
        });
      }
    }, 3000); // 3000 ms = 3 segundos

    return () => clearInterval(timer);
  }, [currentTestimonial, testimonials.length]);

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden font-principal flex justify-center min-h-[850px] items-center">
      
      {/* Fondo a pantalla completa */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-skinlounge.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#3b2a22] bg-opacity-40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contenedor Principal en Cuadrícula (Grid) */}
      <div className="relative z-10 w-full max-w-[1100px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos + Tarjeta Vertical
            ========================================= */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Cabecera integrada y centrada en celular */}
          <div className="mb-8 flex flex-col items-center lg:items-start" style={{ fontFamily: 'Alta, serif' }}>
            <h3 className="text-white text-lg md:text-xl tracking-[0.25em] font-light mb-[-5px]">
              FACIAL
            </h3>
            <h2 className="text-white text-[3.5rem] md:text-[4.5rem] leading-[1.1] mb-1 drop-shadow-md">
              SKIN LOUNGE
            </h2>
            <p className="text-white text-base md:text-lg font-light tracking-wide">
              Experiencias en limpiezas faciales EXCLUSIVAS
            </p>
          </div>

          {/* Tarjeta de Imagen Vertical */}
          <div className="relative w-[280px] md:w-[320px] h-[420px] md:h-[480px] rounded-[2rem] overflow-hidden border-[3px] border-white border-opacity-30 shadow-2xl mx-auto lg:mx-0">
            <img 
              src="/sl-carrusel.jpg" 
              alt="Skin Lounge Procedimiento" 
              className="w-full h-full object-cover"
            />
            {/* Gradiente inferior para resaltar los puntitos */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            {/* Puntitos del carrusel centrados abajo */}
            <div className="absolute bottom-5 w-full flex justify-center gap-2.5">
              {Array.from({ length: totalCarouselImages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`rounded-full transition-all ${
                    index === currentImage 
                      ? 'w-2.5 h-2.5 bg-white' 
                      : 'w-2.5 h-2.5 bg-white bg-opacity-40 hover:bg-opacity-80'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Testimonios y Botones
            ========================================= */}
        <div className="flex flex-col gap-6 w-full max-w-[420px] mx-auto lg:ml-auto mt-10 lg:mt-0">
          
          {/* Carrusel en celular y Lista normal en PC */}
          <div 
            ref={testimonialRef}
            className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide pb-4 md:pb-0 gap-4 md:gap-5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonio) => (
              <div key={testimonio.id} className="w-full flex-shrink-0 md:flex-shrink md:w-auto snap-center">
                
                <div className="group bg-white/10 backdrop-blur-sm border border-white/40 rounded-[1.2rem] p-4 md:p-5 flex gap-4 shadow-lg hover:bg-white/20 transition-all duration-300 cursor-default h-full">
                  
                  {/* Ícono de Usuario (Avatar) */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[1.5px] border-white flex items-center justify-center bg-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Contenido (Estrellas + Texto) */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-3.5 h-3.5 md:w-4 md:h-4 text-white transition-all duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white text-[13px] md:text-[14px] font-light leading-snug md:leading-relaxed">
                      {testimonio.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de Acción */}
          <div className="flex justify-center lg:justify-end mt-2">
            <Link 
              to="/skinlounge" 
              className="inline-flex items-center justify-center w-auto gap-2 bg-[#7ba9b7] text-white px-7 lg:px-8 py-3 rounded-full font-medium text-[15px] shadow-lg hover:bg-[#6894a1] transition-colors whitespace-nowrap"
            >
              Tratamientos Skin Lounge
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Redes Sociales con íconos personalizados */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-3 lg:gap-4 mt-2 text-white">
            <span className="font-light text-[15px] lg:text-[17px] tracking-wide text-center sm:text-left lg:whitespace-nowrap">
              Mira nuestra experiencia en redes:
            </span>
            <div className="flex gap-2.5 lg:gap-3">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default SkinLounge;