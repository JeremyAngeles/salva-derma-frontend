import React, { useState } from 'react';

const CasosExitoAlopecia = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const casos = [
    { id: 1, antes: '/alopecia-antes.jpg', despues: '/alopecia-despues.jpg' },
    { id: 2, antes: '/alopecia-antes-2.jpg', despues: '/alopecia-despues-2.jpg' },
    { id: 3, antes: '/alopecia-antes-3.jpg', despues: '/alopecia-despues-3.jpg' },
    { id: 4, antes: '/alopecia-antes-4.jpg', despues: '/alopecia-despues-4.jpg' }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#fafafa] font-principal flex flex-col items-center z-0">
      
      {/* Franja gris de fondo que cruza la pantalla detrás de las fotos */}
      <div className="absolute top-[55%] md:top-[60%] left-0 w-full h-[250px] sm:h-[350px] bg-[#e6e6e6] transform -translate-y-1/2 -z-10"></div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Título Principal */}
        <h2
          className="text-2xl md:text-3xl lg:text-[2.2rem] text-[#053d57] leading-[1.3] mb-5 max-w-[900px] tracking-wide uppercase"
          style={{ fontFamily: 'Alta, serif' }}
        >
          LA ALOPECIA SÍ SE PUEDE TRATAR. NO CON MITOS,<br className="hidden md:block" />
          NO CON PROMESAS, CON DERMATOLOGÍA Y<br className="hidden md:block" />
          PROTOCOLOS CLÍNICOS REALES.
        </h2>

        {/* Subtítulo */}
        <p className="text-[#88807a] text-[14px] md:text-base font-light leading-relaxed mb-12 max-w-[700px]">
          Nuestro staff de dermatólogos capacitados en tricología te<br className="hidden md:block" />
          presentan algunos de nuestros casos de éxito.
        </p>

        {/* Contenedor Antes / Después */}
        <div className="w-full max-w-[850px] rounded-[2rem] overflow-hidden shadow-lg flex flex-col sm:flex-row bg-white relative">
          
          {/* ANTES */}
          <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px] relative border-b-2 sm:border-b-0 sm:border-r-2 border-white">
            <img
              src={casos[currentCase].antes}
              alt="Antes"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#d9d9d9]' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-0 w-full text-center">
              <span className="text-white font-medium tracking-widest text-sm md:text-base drop-shadow-md">ANTES</span>
            </div>
          </div>

          {/* DESPUÉS */}
          <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px] relative">
            <img
              src={casos[currentCase].despues}
              alt="Después"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#cccccc]' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-0 w-full text-center">
              <span className="text-white font-medium tracking-widest text-sm md:text-base drop-shadow-md">DESPUÉS</span>
            </div>
          </div>
        </div>

        {/* Puntitos indicadores */}
        <div className="flex gap-3 mt-10">
          {casos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all border border-[#bc9b92] ${
                currentCase === index ? 'bg-[#bc9b92]' : 'bg-transparent hover:bg-[#bc9b92]/30'
              }`}
              aria-label={`Ver caso ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CasosExitoAlopecia;