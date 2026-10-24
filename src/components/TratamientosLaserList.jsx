import React, { useState, useEffect } from 'react';

const TratamientosLaserList = () => {
  const tratamientos = [
    {
      titulo: "DISTINTOS TIPOS DE CICATRICES:",
      descripcion: "De acné, queloides, por accidentes, cortes y postquirúrgicas."
    },
    {
      titulo: "ENFERMEDADES INFLAMATORIAS Y ROJECES :",
      descripcion: "Acné, rosácea y telangiectasias."
    },
    {
      titulo: "MANCHAS FACIALES:",
      descripcion: "Pecas, melasma, manchas postinflamatorias, lentigo y nevus de Ota."
    },
    {
      titulo: "MANCHAS CORPORALES:",
      descripcion: "En axilas, espalda e ingle."
    },
    {
      titulo: "ALTERACIONES DE LA PIEL:",
      descripcion: "Verrugas, lunares, acrocordones, estrías y queratosis."
    },
    {
      titulo: "ONICOMICOSIS",
      descripcion: "" // No tiene descripción en la imagen
    },
    {
      titulo: "REJUVENECIMIENTO FACIAL:",
      descripcion: "Líneas de expresión, flacidez, poros dilatados, textura de piel, etc."
    }
  ];

  // Las 3 imágenes verticales que cambian cada 5 segundos
  const imagenesCarrusel = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792809827/jitmumcc0pcjnywzpenf.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792809827/wsyn2srophcs32xe7ovd.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792809827/tylg0m7as8g0mwgobzua.jpg'
  ];

  const [currentImg, setCurrentImg] = useState(0);

  // Efecto del carrusel: cambia cada 5000ms (5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === imagenesCarrusel.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [imagenesCarrusel.length]);

  return (
    // Imagen como FONDO de toda la sección
    <section 
      className="relative w-full py-20 md:py-28 font-principal overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792613169/copy_of_03_-tratamientos_que_realizamos.png')" }}
    >
      
      {/* Capa de protección opcional por si el texto choca con algo del fondo */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-12 items-stretch">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos y Lista
            ========================================= */}
        <div className="flex flex-col h-full justify-center py-4">
          
          {/* Título (Fuente Alta) */}
          <h2 
            className="text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-tight mb-6 drop-shadow-md"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TRATAMIENTOS LÁSER
          </h2>

          {/* Párrafo introductorio */}
          <p className="text-white text-base md:text-lg font-light leading-relaxed mb-10 max-w-[95%] drop-shadow-sm">
            Nuestra unidad nos permite tratar distintas enfermedades y mejorar la piel de manera precisa:
          </p>

          {/* Lista de tratamientos */}
          {/* AQUÍ EL CAMBIO: Incrementé el gap a gap-8 md:gap-10 para separar bien cada punto */}
          <div className="flex flex-col gap-8 md:gap-10 flex-1">
            {tratamientos.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Viñeta (Puntito blanco) */}
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white mt-1.5 md:mt-2 flex-shrink-0 shadow-sm"></div>
                
                {/* Contenido del ítem */}
                <div className="flex flex-col drop-shadow-sm">
                  <h3 className="text-white font-bold text-sm md:text-[15px] tracking-wide uppercase leading-snug">
                    {item.titulo}
                  </h3>
                  {item.descripcion && (
                    <p className="text-white/90 font-light text-sm md:text-[15px] mt-1.5 leading-snug">
                      {item.descripcion}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================
            COLUMNA DERECHA: Imagen con marco (VERTICAL Y ALTA)
            ========================================= */}
        <div className="relative w-full h-full min-h-[500px] sm:min-h-[600px] lg:min-h-[750px] max-w-[500px] mx-auto lg:ml-auto mt-8 lg:mt-0 flex items-stretch">
          
          {/* Marco decorativo de fondo (offset), también se hace alto con 'h-full' */}
          <div className="absolute inset-0 border-[3px] border-[#d2beba] rounded-[2rem] transform translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6"></div>
          
          {/* Contenedor del Carrusel (toma toda la altura disponible) */}
          <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white/20">
            {imagenesCarrusel.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Tratamiento láser ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImg ? 'opacity-100' : 'opacity-0'
                }`}
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
              />
            ))}
            
            {/* Indicadores de puntitos debajo del carrusel */}
            <div className="absolute bottom-6 left-0 w-full flex justify-center gap-3 z-20">
              {imagenesCarrusel.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    currentImg === idx ? 'bg-white w-3 h-3 scale-110' : 'bg-white/50 w-3 h-3 hover:bg-white/80'
                  }`}
                  aria-label={`Ver imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default TratamientosLaserList;