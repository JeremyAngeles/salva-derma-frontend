import React, { useState } from 'react';

const CadaPasoCirugia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Puedes agregar las rutas de tus 4 casos de Antes y Después aquí
  const casos = [
    { id: 1, antes: '/antes-rino-1.jpg', despues: '/despues-rino-1.jpg' },
    { id: 2, antes: '/antes-rino-2.jpg', despues: '/despues-rino-2.jpg' },
    { id: 3, antes: '/antes-rino-3.jpg', despues: '/despues-rino-3.jpg' },
    { id: 4, antes: '/antes-rino-4.jpg', despues: '/despues-rino-4.jpg' },
  ];

  return (
    <section 
      className="relative w-full py-16 md:py-24 font-principal overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792617218/03_-_antes_y_despues_casos_2.jpg')` }}
    >
      
      {/* Capa sutil de protección (opcional) para asegurar legibilidad sobre el fondo fotográfico */}
      <div className="absolute inset-0 bg-white/20 md:bg-white/10 pointer-events-none z-0"></div>

      {/* Contenedor principal alineado a la derecha (justify-end) ya que quitamos la foto de la izquierda */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-6 lg:px-12 flex justify-center lg:justify-end">
        
        {/* =========================================
            COLUMNA ÚNICA: Textos y Antes/Después
            ========================================= */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-end text-center lg:text-right">
          
          {/* Título Principal */}
          <h2 
            className="text-[#053d57] text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] xl:text-[4rem] leading-[1.08] tracking-wide mb-3 drop-shadow-sm"
            style={{ fontFamily: 'Alta, serif' }}
          >
            CADA PASO TE ACERCA<br />
            MÁS A TU SUEÑO
          </h2>

          {/* Subtítulo en fuente Alta */}
          <h3 
            className="text-[#7c7570] text-[15px] sm:text-[18px] md:text-[21px] tracking-wider uppercase mb-6 font-light drop-shadow-sm"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PARA TODO LO DEMÁS, EXISTE LA CIRUGÍA PLÁSTICA
          </h3>

          {/* Párrafo descriptivo */}
          <p className="text-[#7c7570] text-[13.5px] md:text-[15px] font-light leading-relaxed max-w-[600px] mb-8 md:mb-10 drop-shadow-sm">
            La cirugía plástica, sea facial o corporal es un universo en el cual el
            centro es el paciente, no existen dos resultados iguales, cada caso
            es único y se refleja en el plan pre - operatorio y se define según
            las características de cada paciente, ese es el secreto de un buen
            resultado y lo que nos diferencia.
          </p>

          {/* Contenedor del Comparador ANTES / DESPUÉS y Puntitos */}
          <div className="w-full max-w-[560px] flex flex-col items-center">
            
            {/* Tarjeta Dividida */}
            <div className="w-full h-[230px] sm:h-[270px] md:h-[290px] rounded-[1.4rem] overflow-hidden shadow-lg flex relative bg-white/40 backdrop-blur-sm border border-white/30">
              
              {/* Mitad Izquierda: ANTES */}
              <div className="relative w-1/2 h-full">
                <img 
                  src={casos[currentSlide].antes} 
                  alt="Antes de cirugía" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#d8d4d0] object-cover' }}
                />
                <div className="absolute inset-x-0 bottom-4 text-center">
                  <span className="text-white text-[14px] md:text-[16px] font-normal tracking-wider uppercase drop-shadow-md">
                    ANTES
                  </span>
                </div>
              </div>

              {/* Línea divisoria blanca central */}
              <div className="w-[2px] h-full bg-white z-10 shadow-[0_0_5px_rgba(0,0,0,0.3)]"></div>

              {/* Mitad Derecha: DESPUÉS */}
              <div className="relative w-1/2 h-full">
                <img 
                  src={casos[currentSlide].despues} 
                  alt="Después de cirugía" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#ccc7c2] object-cover' }}
                />
                <div className="absolute inset-x-0 bottom-4 text-center">
                  <span className="text-white text-[14px] md:text-[16px] font-normal tracking-wider uppercase drop-shadow-md">
                    DESPUÉS
                  </span>
                </div>
              </div>

            </div>

            {/* Puntitos del Carrusel (4 puntos) */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {casos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ver caso ${index + 1}`}
                  className={`w-4 h-4 rounded-full transition-all shadow-sm ${
                    currentSlide === index
                      ? 'bg-[#c9a79e] border border-[#c9a79e]'
                      : 'bg-white/50 border-[1.5px] border-[#053d57] hover:bg-[#053d57]/30'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CadaPasoCirugia;