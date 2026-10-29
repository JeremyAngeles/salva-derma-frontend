import React, { useState, useEffect } from 'react';

const CadaPasoCirugia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Las 4 imágenes completas de Antes y Después
  const casos = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793123758/pkvt5vdbhpfjg1ewl4fi.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793123760/bvdxvdnxvvi1gof8rk9i.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793123759/rxbhqzrkkzprofqnexif.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1793123759/ebl5bpkcvqh32etudong.jpg',
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
      style={{ backgroundImage: `url('https://res.cloudinary.com/da47iihxz/image/upload/v1793123581/ftcssw1an8q8mnb9cy7b.jpg')` }}
    >
      
      {/* Capa sutil de protección para legibilidad */}
      <div className="absolute inset-0 bg-white/20 md:bg-white/10 pointer-events-none z-0"></div>

      {/* Contenedor principal alineado a la derecha */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 lg:px-12 flex justify-center lg:justify-end">
        
        <div className="w-full lg:w-[62%] flex flex-col items-center lg:items-end text-center lg:text-right">
          
          {/* Título Principal */}
          <h2 
            className="text-[#053d57] text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] xl:text-[3.6rem] leading-[1.08] tracking-wide mb-0 drop-shadow-sm"
            style={{ fontFamily: 'Alta, serif' }}
          >
            CADA PASO TE ACERCA<br />
            MÁS A TU SUEÑO
          </h2>

          {/* Subtítulo en fuente Alta */}
          <h3 
            className="text-[#7c7570] text-[15px] sm:text-[18px] md:text-[21px] tracking-wider uppercase mb-1 md:mb-1.5 font-light drop-shadow-sm"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PARA TODO LO DEMÁS, EXISTE LA CIRUGÍA PLÁSTICA
          </h3>

          {/* Párrafo descriptivo con margen superior para separarlo */}
          <p className="text-[#7c7570] text-[15px] md:text-[17px] font-light leading-snug tracking-tight max-w-[650px] mt-4 md:mt-6 mb-8 md:mb-10 drop-shadow-sm">
            La cirugía plástica, sea facial o corporal es un universo en el cual el
            centro es el paciente, no existen dos resultados iguales, cada caso
            es único y se refleja en el plan pre - operatorio y se define según
            las características de cada paciente, ese es el secreto de un buen
            resultado y lo que nos diferencia.
          </p>

          {/* Contenedor de la Imagen y Puntitos */}
          <div className="w-full max-w-[680px] flex flex-col items-center">
            
            {/* Tarjeta de imagen con carrusel y las etiquetas ANTES / DESPUÉS dentro */}
            <div className="w-full h-[250px] sm:h-[300px] md:h-[340px] rounded-[1.4rem] overflow-hidden shadow-lg relative bg-white/40 backdrop-blur-sm border border-white/30 group">
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

              {/* Etiquetas ANTES y DESPUÉS con la tipografía Alta y posición idéntica a los demás componentes */}
              <div className="absolute bottom-4 md:bottom-6 left-0 w-1/2 flex justify-center pointer-events-none z-20">
                <span 
                  className="text-white text-xl md:text-3xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  style={{ fontFamily: 'Alta, serif' }}
                >
                  ANTES
                </span>
              </div>

              <div className="absolute bottom-4 md:bottom-6 right-0 w-1/2 flex justify-center pointer-events-none z-20">
                <span 
                  className="text-white text-xl md:text-3xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  style={{ fontFamily: 'Alta, serif' }}
                >
                  DESPUÉS
                </span>
              </div>
            </div>

            {/* Puntitos del Carrusel (4 puntos) */}
            <div className="flex items-center justify-center gap-3 mt-4">
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