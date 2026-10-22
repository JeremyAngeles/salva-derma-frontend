import React, { useState, useEffect } from 'react';

const CasosExitoAlopecia = () => {
  const [currentCase, setCurrentCase] = useState(0);

  // Las 4 fotos que enviaste, que ya traen el "Antes y Después" unificados
  const casos = [
    { id: 1, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696198/antes_y_despu%C3%A9s_clinica_1.jpg' },
    { id: 2, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696200/antes_y_despu%C3%A9s_clinica_2.jpg' },
    { id: 3, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696201/antes_y_despu%C3%A9s_clinica_3.jpg' },
    { id: 4, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696198/antes_y_despu%C3%A9s_clinica_4.jpg' }
  ];

  // Efecto para cambiar la foto automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [casos.length]);

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

        {/* Contenedor de la Foto Única */}
        <div className="w-full max-w-[850px] rounded-[2rem] overflow-hidden shadow-lg bg-white relative transition-all duration-500">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] relative">
            <img
              src={casos[currentCase].img}
              alt={`Caso de éxito ${currentCase + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#d9d9d9]' }}
            />
          </div>
        </div>

        {/* Puntitos indicadores (Clickeables) */}
        <div className="flex gap-3 mt-10">
          {casos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all border border-[#bc9b92] ${
                currentCase === index ? 'bg-[#bc9b92] scale-110' : 'bg-transparent hover:bg-[#bc9b92]/30'
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