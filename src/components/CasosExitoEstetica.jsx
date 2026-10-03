import React, { useState } from 'react';

const CasosExitoEstetica = () => {
  const [currentCase, setCurrentCase] = useState(0);

  // Puedes ir agregando más fotos a este arreglo
  const casos = [
    {
      id: 1,
      antes: '/estetica-antes.jpg',   // Reemplaza con la ruta de tu foto "Antes"
      despues: '/estetica-despues.jpg' // Reemplaza con la ruta de tu foto "Después"
    },
    { id: 2, antes: '/estetica-antes-2.jpg', despues: '/estetica-despues-2.jpg' },
    { id: 3, antes: '/estetica-antes-3.jpg', despues: '/estetica-despues-3.jpg' }
  ];

  return (
    // Contenedor principal con mucho padding vertical para dar espacio a que las fotos sobresalgan
    <section className="w-full py-24 md:py-32 bg-[#fafafa] font-principal flex flex-col items-center justify-center">
      
      {/* FRANJA GRIS (El contenedor real del contenido) */}
      <div 
        className="relative w-full bg-[#8c8c8c] bg-cover bg-center flex justify-center py-12 md:py-0"
        style={{ backgroundImage: "url('/fondo-clinica-gris.jpg')", backgroundBlendMode: 'multiply' }}
      >
        
        {/* Grid interno */}
        <div className="w-full max-w-[1100px] px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* =========================================
              COLUMNA IZQUIERDA: Fotos que "sobresalen"
              ========================================= */}
          <div className="w-full flex justify-center md:justify-start lg:ml-10">
            {/* 
                AQUÍ ESTÁ EL TRUCO: 
                Usamos -mt-16 y -mb-16 en PC (y valores menores en móvil) para que 
                el bloque de fotos rompa los bordes superior e inferior de la franja gris.
            */}
            <div className="w-full max-w-[320px] md:max-w-[350px] flex flex-col rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white transform -translate-y-6 md:-mt-16 md:-mb-16 relative z-10">
              
              {/* ANTES (Arriba) */}
              <div className="w-full h-[220px] sm:h-[260px] relative border-b-2 border-white">
                <img
                  src={casos[currentCase].antes}
                  alt="Antes"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dcc4bc]' }}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <span className="text-white font-medium tracking-widest text-xs md:text-sm drop-shadow-md">ANTES</span>
                </div>
              </div>

              {/* DESPUÉS (Abajo) */}
              <div className="w-full h-[220px] sm:h-[260px] relative border-t-2 border-white">
                <img
                  src={casos[currentCase].despues}
                  alt="Después"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#ceb5ac]' }}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <span className="text-white font-medium tracking-widest text-xs md:text-sm drop-shadow-md">DESPUÉS</span>
                </div>
              </div>

            </div>
          </div>

          {/* =========================================
              COLUMNA DERECHA: Textos
              ========================================= */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right text-white relative z-10">
            
            <h2
              className="text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.1] mb-6 max-w-[500px] tracking-wide drop-shadow-sm"
              style={{ fontFamily: 'Alta, serif' }}
            >
              QUERERTE ES ACEPTARTE<br />
              COMO ERES, PERO<br />
              TAMBIÉN ES CONSTRUIRTE<br />
              COMO QUIERES
            </h2>

            {/* Línea divisoria decorativa (opcional, si quieres separar título de texto) */}
            <div className="w-[150px] h-[1px] bg-white/40 mb-6"></div>

            <p className="text-white/90 text-[14px] md:text-[15px] font-light leading-relaxed mb-6 max-w-[480px]">
              Nuestros tratamientos en dermatología estética<br className="hidden lg:block"/>
              buscan calidad y belleza, sin olvidar que la piel<br className="hidden lg:block"/>
              es un órgano complejo que tiene distintas capas<br className="hidden lg:block"/>
              y también posibles enfermedades. Nuestro<br className="hidden lg:block"/>
              objetivo es mejorar la piel con conocimiento y<br className="hidden lg:block"/>
              ciencia que nos brinda nuestra especialidad.
            </p>
          </div>

        </div>
      </div>

      {/* Puntitos indicadores (Por fuera de la franja gris, abajo) */}
      <div className="flex gap-3 mt-12 md:mt-16">
        {casos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCase(index)}
            className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all border border-[#dcc4bc] shadow-sm ${
              currentCase === index ? 'bg-[#dcc4bc]' : 'bg-transparent hover:bg-[#dcc4bc]/50'
            }`}
            aria-label={`Ver caso ${index + 1}`}
          ></button>
        ))}
      </div>

    </section>
  );
};

export default CasosExitoEstetica;