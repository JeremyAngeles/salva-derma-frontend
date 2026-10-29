import React from 'react';

const TratamientosEstetica = () => {
  const tratamientos = [
    {
      id: 1,
      title1: "REJUVENECIMIENTO",
      title2: "FACIAL",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531331/lineaas_de_expreci%C3%B3n.png",
      items: [
        "Líneas de expresión (arrugas)",
        "Flacidez (mejora del efecto lifting)",
        "Armonización facial (mejora de estructuras como mentón, mandíbula, labios, nariz, pómulos, etc.)"
      ]
    },
    {
      id: 2,
      title1: "CALIDAD Y TEXTURA",
      title2: "DE PIEL",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531330/textura_de_piel.png",
      items: [
        "Poros dilatados",
        "Alteraciones de textura",
        "Piel apagada o con falta de luminosidad"
      ]
    },
    {
      id: 3,
      title1: "PIGMENTACIÓN",
      title2: "Y MANCHAS",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531333/ojera.png",
      items: [
        "Manchas en la piel",
        "Rojeces persistentes",
        "Ojeras"
      ]
    }
  ];

  return (
    <section 
      className="relative w-full py-20 md:py-28 font-principal bg-cover bg-center bg-no-repeat min-h-[850px] flex items-center overflow-hidden"
      style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793087593/a90tdsuvgg48vd4y6e0d.jpg')" }} 
    >
      <div className="absolute inset-0 bg-black/10 md:bg-gradient-to-r md:from-transparent md:to-[#86685f]/60"></div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 flex justify-end">
        {/* Se usa ml-auto para forzarlo totalmente a la derecha */}
        <div className="w-full max-w-[600px] flex flex-col justify-center items-center ml-auto">
          <h2 
            className="w-full text-4xl md:text-5xl lg:text-6xl text-white leading-[0.65] mb-4 md:mb-5 text-center drop-shadow-md"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TRATAMIENTOS<br />
            D. ESTÉTICA
          </h2>

          <div className="w-full flex flex-col gap-5 md:gap-6">
            {tratamientos.map((trat) => (
              <div 
                key={trat.id} 
                className="flex flex-col sm:flex-row items-center sm:items-stretch gap-5 bg-white/10 backdrop-blur-md border border-white/40 rounded-[2rem] p-4 md:p-5 shadow-lg hover:bg-white/20 transition-all duration-300 w-full"
              >
                <div className="w-full sm:w-[140px] sm:h-[140px] flex-shrink-0">
                  <img 
                    src={trat.img} 
                    alt={`${trat.title1} ${trat.title2}`} 
                    className="w-full h-40 sm:h-full object-cover rounded-[1.2rem] shadow-sm"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-40 sm:h-full object-cover rounded-[1.2rem] bg-white/30' }}
                  />
                </div>

                <div className="flex flex-col justify-center w-full py-1">
                  <h3 className="text-white font-bold text-base md:text-[22px] tracking-wide uppercase mb-2.5 sm:mb-3 drop-shadow-sm text-left leading-tight">
                    {trat.title1}<br />
                    {trat.title2}
                  </h3>
                  
                  <ul className="flex flex-col gap-2">
                    {trat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white text-[14px] md:text-[15px] font-light leading-snug text-left">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 shadow-sm"></span>
                        <span className="drop-shadow-sm">{item}</span>
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