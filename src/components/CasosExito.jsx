import React, { useState } from 'react';

const CasosExito = () => {
  const [currentCase, setCurrentCase] = useState(0);

  // Puedes ir agregando más fotos a este arreglo
  const casos = [
    {
      id: 1,
      antes: '/antes-1.jpg',   // Reemplaza con la ruta de tu foto "Antes"
      despues: '/despues-1.jpg' // Reemplaza con la ruta de tu foto "Después"
    },
    { id: 2, antes: '/antes-2.jpg', despues: '/despues-2.jpg' },
    { id: 3, antes: '/antes-3.jpg', despues: '/despues-3.jpg' },
    { id: 4, antes: '/antes-4.jpg', despues: '/despues-4.jpg' },
    { id: 5, antes: '/antes-5.jpg', despues: '/despues-5.jpg' },
    { id: 6, antes: '/antes-6.jpg', despues: '/despues-6.jpg' }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#fcfcfc] font-principal overflow-hidden flex flex-col items-center">
      
      {/* Elemento decorativo de fondo (la máquina difuminada de la derecha) */}
      <div className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none z-0 hidden md:block">
         <img src="/maquina-laser.png" alt="Fondo decorativo" className="h-[600px] object-contain filter blur-sm grayscale" />
      </div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Título Principal con fuente Alta */}
        <h2
          className="text-2xl md:text-4xl lg:text-[2.6rem] text-[#053d57] leading-[1.2] mb-5 max-w-[900px] uppercase tracking-wide"
          style={{ fontFamily: 'Alta, serif' }}
        >
          PORQUE NUESTRA UNIDAD DERMOLASER VA<br className="hidden md:block" />
          MÁS ALLÁ DE LA ESTÉTICA, ES SALUD.. IMPACTA<br className="hidden md:block" />
          EN TU PIEL, IMPACTA EN TUS EMOCIONES.
        </h2>

        {/* Subtítulo */}
        <p className="text-[#88807a] text-[13px] md:text-[15px] font-light leading-relaxed mb-12 max-w-[750px]">
          Te dejamos algunos de nuestros casos de éxito, siempre realizado con nuestros<br className="hidden md:block" />
          protocolos combinados. Nuestra clave es combinar más de 1 tecnología.
        </p>

        {/* Contenedor Antes / Después */}
        <div className="w-full max-w-[850px] rounded-[2rem] overflow-hidden shadow-xl flex flex-col sm:flex-row bg-white relative z-20">
          
          {/* ANTES */}
          <div className="w-full sm:w-1/2 h-[300px] sm:h-[450px] relative">
            <img
              src={casos[currentCase].antes}
              alt="Antes"
              className="w-full h-full object-cover"
              // Fallback por si la imagen no existe aún
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#ebdcd5]' }}
            />
            {/* Gradiente sutil para que el texto resalte */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-0 w-full text-center">
              <span className="text-white font-medium tracking-widest text-sm md:text-base drop-shadow-md">ANTES</span>
            </div>
          </div>

          {/* DESPUÉS */}
          <div className="w-full sm:w-1/2 h-[300px] sm:h-[450px] relative">
            <img
              src={casos[currentCase].despues}
              alt="Después"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dfc5ba]' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
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

export default CasosExito;