import React, { useState, useEffect } from 'react';

const CasosExito = () => {
  const [currentCase, setCurrentCase] = useState(0);

  // Las 8 fotos que ya traen el "Antes y Después" unificados
  const casos = [
    { id: 1, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792695559/antes_y_despu%C3%A9s_laser_1.jpg' },
    { id: 2, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792695557/antes_y_despu%C3%A9s_laser_2.jpg' },
    { id: 3, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792695558/antes_y_despu%C3%A9s_laser_3.jpg' },
    { id: 4, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792695556/antes_y_despu%C3%A9s_laser_4.jpg' },
    { id: 5, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792695557/antes_y_despu%C3%A9s_laser_5.jpg' },
    { id: 6, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792695557/antes_y_despu%C3%A9s_laser_6.jpg' },
    { id: 7, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792695559/antes_y_despu%C3%A9s_laser_7.jpg' },
    { id: 8, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792695556/antes_y_despu%C3%A9s_laser_8.jpg' },
  ];

  // Efecto para cambiar la foto automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(interval); // Limpiamos el intervalo si se desmonta
  }, [casos.length]);

  return (
    <section 
      className="relative w-full py-20 md:py-28 font-principal overflow-hidden flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792531259/04_-_FONDO_antes_despues.png')" }}
    >
      
      {/* Capa de protección por si el texto se cruza con las letras de fondo en celulares */}
      <div className="absolute inset-0 bg-white/60 md:bg-white/40 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Título Principal */}
        <h2
          className="text-2xl md:text-4xl lg:text-[2.6rem] text-[#053d57] leading-[1.2] mb-5 max-w-[900px] uppercase tracking-wide drop-shadow-sm md:drop-shadow-none"
          style={{ fontFamily: 'Alta, serif' }}
        >
          PORQUE NUESTRA UNIDAD DERMOLASER VA<br className="hidden md:block" />
          MÁS ALLÁ DE LA ESTÉTICA, ES SALUD.. IMPACTA<br className="hidden md:block" />
          EN TU PIEL, IMPACTA EN TUS EMOCIONES.
        </h2>

        {/* Subtítulo */}
        <p className="text-[#88807a] text-[13px] md:text-[15px] font-semibold md:font-light leading-relaxed mb-12 max-w-[750px] drop-shadow-sm md:drop-shadow-none bg-white/50 md:bg-transparent p-2 md:p-0 rounded-lg">
          Te dejamos algunos de nuestros casos de éxito, siempre realizado con nuestros<br className="hidden md:block" />
          protocolos combinados. Nuestra clave es combinar más de 1 tecnología.
        </p>

        {/* Contenedor de la Foto Única */}
        <div className="w-full max-w-[850px] rounded-[2rem] overflow-hidden shadow-xl bg-white relative z-20 transition-all duration-500">
          <div className="w-full h-[300px] sm:h-[450px] md:h-[500px] relative">
            <img
              src={casos[currentCase].img}
              alt={`Caso de éxito ${currentCase + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#ebdcd5]' }}
            />
          </div>
        </div>

        {/* Puntitos indicadores (Clickeables) */}
        <div className="flex gap-3 mt-10 relative z-20 bg-white/50 md:bg-transparent p-2 md:p-0 rounded-full">
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

export default CasosExito;