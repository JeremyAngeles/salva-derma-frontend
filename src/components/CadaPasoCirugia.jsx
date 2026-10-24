import React, { useState, useEffect } from 'react';

const CadaPasoCirugia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Las 4 imágenes completas de Antes y Después
  const casos = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792813684/b0ty46jvnqhlt1pyksvi.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792813683/pg5tczoxsiodki2upaye.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792813683/aprh49gczng5wqsq3tan.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792813683/mqlna8o8zv4lcaykxfum.jpg',
  ];

  // Efecto para que cambien automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [casos.length]);

  return (
    <section 
      className="relative w-full py-16 md:py-24 font-principal overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792617218/03_-_antes_y_despues_casos_2.jpg')` }}
    >
      
      {/* Capa sutil de protección para legibilidad */}
      <div className="absolute inset-0 bg-white/20 md:bg-white/10 pointer-events-none z-0"></div>

      {/* Contenedor principal alineado a la derecha */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 lg:px-12 flex justify-center lg:justify-end">
        
        <div className="w-full lg:w-[62%] flex flex-col items-center lg:items-end text-center lg:text-right">
          
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

          {/* Párrafo descriptivo (Un poco más grande) */}
          <p className="text-[#7c7570] text-[15px] md:text-[17px] font-light leading-relaxed max-w-[650px] mb-8 md:mb-10 drop-shadow-sm">
            La cirugía plástica, sea facial o corporal es un universo en el cual el
            centro es el paciente, no existen dos resultados iguales, cada caso
            es único y se refleja en el plan pre - operatorio y se define según
            las características de cada paciente, ese es el secreto de un buen
            resultado y lo que nos diferencia.
          </p>

          {/* Contenedor de la Imagen más horizontal y Puntitos */}
          <div className="w-full max-w-[680px] flex flex-col items-center">
            
            {/* Tarjeta más ancha/horizontal con transición */}
            <div className="w-full h-[250px] sm:h-[300px] md:h-[340px] rounded-[1.4rem] overflow-hidden shadow-lg relative bg-white/40 backdrop-blur-sm border border-white/30">
              {casos.map((imgUrl, index) => (
                <img 
                  key={index}
                  src={imgUrl} 
                  alt={`Caso Antes y Después ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  onError={(e) => { 
                    e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; 
                    e.target.className = 'absolute inset-0 w-full h-full bg-[#d8d4d0] object-cover'; 
                  }}
                />
              ))}
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