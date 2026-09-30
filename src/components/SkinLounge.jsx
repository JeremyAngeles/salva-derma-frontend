import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SkinLounge = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalCarouselImages = 4;

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
        <div className="flex flex-col">
          
          {/* Cabecera integrada en la columna izquierda */}
          <div className="mb-8">
            <h3 className="text-white text-lg md:text-xl tracking-[0.25em] font-light mb-[-5px]">
              FACIAL
            </h3>
            <h2 className="text-white text-[3.5rem] md:text-[4.5rem] font-serif leading-none mb-3 drop-shadow-md">
              SKIN LOUNGE
            </h2>
            <p className="text-white text-base md:text-lg font-light tracking-wide">
              Experiencias en limpiezas faciales EXCLUSIVAS
            </p>
          </div>

          {/* Tarjeta de Imagen Vertical */}
          <div className="relative w-[280px] md:w-[320px] h-[420px] md:h-[480px] rounded-[2rem] overflow-hidden border-[3px] border-white border-opacity-30 shadow-2xl">
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
        {/* Ancho máximo reducido a 420px para forzar que las tarjetas sean más cuadriculadas */}
        <div className="flex flex-col gap-6 w-full max-w-[420px] ml-auto mt-10 lg:mt-0">
          
          {/* Lista de Testimonios - Aumentamos el gap-8 para separar más las reseñas */}
          <div className="flex flex-col gap-8">
            {testimonials.map((testimonio) => (
              <div 
                key={testimonio.id} 
                // Añadimos "group" para el hover y cambiamos a bg-white/10 para más transparencia
                className="group bg-white/10 backdrop-blur-sm border border-white/40 rounded-[1.5rem] p-6 md:p-7 flex gap-5 shadow-lg hover:bg-white/20 transition-all duration-300 cursor-default"
              >
                {/* Ícono de Usuario (Avatar) */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[1.5px] border-white flex items-center justify-center bg-transparent">
                    {/* Ícono genérico de perfil */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Contenido (Estrellas + Texto) */}
                <div className="flex flex-col gap-2">
                  {/* 5 Estrellas con efecto Glow al hacer Hover */}
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        // group-hover cambia a amarillo y añade el brillo
                        className="w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Texto del testimonio */}
                  <p className="text-white text-[14px] md:text-[15px] font-light leading-relaxed">
                    {testimonio.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de Acción Azul Claro */}
          <div className="flex justify-end mt-4">
            <Link 
              to="/skinlounge" 
              className="inline-flex items-center justify-between w-[280px] gap-2 bg-[#7ba9b7] text-white px-7 py-3 rounded-full font-medium text-[15px] shadow-lg hover:bg-[#6894a1] transition-colors"
            >
              Tratamientos Skin Lounge
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Redes Sociales alineadas a la derecha */}
          <div className="flex justify-end items-center gap-4 mt-2 text-white">
            <span className="font-light text-[15px] tracking-wide">Mira nuestra experiencia en redes:</span>
            <div className="flex gap-2">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#7ba9b7] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#7ba9b7] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#7ba9b7] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.48-1.2 1.47-2.99 2.5-4.88 2.87-2.02.4-4.14.07-5.88-1-1.63-1.02-2.82-2.58-3.32-4.4-.53-1.92-.35-4.05.5-5.8 1-2.07 2.94-3.56 5.14-4V12c-1.3.17-2.55.77-3.46 1.72-1 1.05-1.57 2.51-1.48 3.96.07 1.47.78 2.86 1.94 3.75 1.08.84 2.54 1.16 3.86 1 1.34-.14 2.58-.8 3.4-1.85.93-1.18 1.38-2.73 1.38-4.23V.02z"/></svg>
              </a>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default SkinLounge;