import React from 'react';

const TratamientosEstetica = () => {
  const tratamientos = [
    {
      id: 1,
      title: "REJUVENECIMIENTO FACIAL",
      img: "/estetica-1.jpg", // Reemplaza con la foto de las arrugas en la frente
      items: [
        "Líneas de expresión (arrugas)",
        "Flacidez (mejora del efecto lifting)",
        "Armonización facial (mejora de estructuras como mentón, mandíbula, labios, nariz, pómulos, etc.)"
      ]
    },
    {
      id: 2,
      title: "CALIDAD Y TEXTURA DE PIEL",
      img: "/estetica-2.jpg", // Reemplaza con la foto de los poros/textura
      items: [
        "Poros dilatados",
        "Alteraciones de textura",
        "Piel apagada o con falta de luminosidad"
      ]
    },
    {
      id: 3,
      title: "PIGMENTACIÓN Y MANCHAS",
      img: "/estetica-3.jpg", // Reemplaza con la foto de las ojeras
      items: [
        "Manchas en la piel",
        "Rojeces persistentes",
        "Ojeras"
      ]
    }
  ];

  return (
    // La sección ahora usa la imagen de la chica como fondo total (bg-cover bg-center)
    <section 
      className="relative w-full py-20 md:py-28 font-principal bg-cover bg-center bg-no-repeat min-h-[850px] flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/estetica-principal.jpg')" }} // Reemplaza con la foto de la modelo
    >
      
      {/* Overlay sutil (opcional) para oscurecer un poco la parte derecha y que el texto blanco sea súper legible */}
      <div className="absolute inset-0 bg-black/10 md:bg-gradient-to-r md:from-transparent md:to-[#86685f]/50"></div>

      {/* Contenedor Principal: Usamos justify-end para empujar el contenido a la derecha en PC */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 flex justify-center md:justify-end">
        
        {/* Contenedor del Título y Tarjetas */}
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col justify-center">
          
          {/* Título */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-10 text-center md:text-left drop-shadow-md"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TRATAMIENTOS<br />
            D. ESTÉTICA
          </h2>

          {/* Contenedor de Tarjetas */}
          <div className="flex flex-col gap-5 md:gap-6">
            {tratamientos.map((trat) => (
              <div 
                key={trat.id} 
                className="flex flex-col sm:flex-row items-center sm:items-stretch gap-5 bg-white/10 backdrop-blur-md border border-white/40 rounded-[2rem] p-4 shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                {/* Imagen Cuadrada de la Tarjeta */}
                <div className="w-full sm:w-[130px] sm:h-[130px] flex-shrink-0">
                  <img 
                    src={trat.img} 
                    alt={trat.title} 
                    className="w-full h-40 sm:h-full object-cover rounded-[1.2rem] shadow-sm"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-40 sm:h-full object-cover rounded-[1.2rem] bg-white/30' }}
                  />
                </div>

                {/* Contenido (Textos y Viñetas) */}
                <div className="flex flex-col justify-center w-full py-1">
                  <h3 className="text-white font-bold text-sm md:text-[15px] tracking-wide uppercase mb-2.5 sm:mb-3 drop-shadow-sm">
                    {trat.title}
                  </h3>
                  
                  <ul className="flex flex-col gap-2">
                    {trat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white text-[13px] md:text-[14px] font-light leading-snug">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TratamientosEstetica;