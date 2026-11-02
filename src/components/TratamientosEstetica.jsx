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
    <>
      {/* =========================================
          VISTA CELULAR Y TABLET (< lg)
          ========================================= */}
      <section 
        className="lg:hidden relative w-full pt-10 pb-10 sm:pt-14 sm:pb-14 font-principal bg-cover bg-top bg-no-repeat flex flex-col justify-between items-center overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793309046/ftczhwbs0a8m6ji2ja1g.png')" }} 
      >
        {/* Título superior */}
        <div className="relative z-10 w-full px-4 text-center">
          <h2 
            className="text-[2.2rem] min-[390px]:text-[2.5rem] sm:text-[3.5rem] text-white leading-[0.95] tracking-wide drop-shadow-md"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TRATAMIENTOS<br />
            D. ESTÉTICA
          </h2>
        </div>

        {/* Espacio libre central para mostrar el rostro del fondo */}
        <div className="w-full h-[300px] min-[390px]:h-[340px] sm:h-[460px] md:h-[540px]"></div>

        {/* Tarjetas inferiores */}
        <div className="relative z-10 w-full max-w-[540px] mx-auto px-4 sm:px-6 flex flex-col gap-3.5 sm:gap-4">
          {tratamientos.map((trat) => (
            <div 
              key={trat.id} 
              className="flex flex-row items-center gap-3.5 sm:gap-5 bg-white/15 backdrop-blur-md rounded-[1.3rem] sm:rounded-[1.6rem] p-3 sm:p-4 shadow-lg w-full"
            >
              {/* Imagen cuadrada a la izquierda con borde blanco */}
              <div className="w-[96px] h-[96px] min-[390px]:w-[105px] min-[390px]:h-[105px] sm:w-[130px] sm:h-[130px] flex-shrink-0">
                <img 
                  src={trat.img} 
                  alt={`${trat.title1} ${trat.title2}`} 
                  className="w-full h-full object-cover rounded-[0.9rem] sm:rounded-[1.1rem] border-[1.5px] border-white shadow-sm"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover rounded-[0.9rem] bg-white/30' }}
                />
              </div>

              {/* Textos a la derecha */}
              <div className="flex flex-col justify-center flex-1 text-left">
                <h3 className="text-white font-bold text-[12px] min-[390px]:text-[13px] sm:text-[16px] tracking-wide uppercase mb-1.5 sm:mb-2 drop-shadow-sm leading-tight">
                  {trat.title1} {trat.title2}
                </h3>
                
                <ul className="flex flex-col gap-0.5 sm:gap-1">
                  {trat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-white text-[10.5px] min-[390px]:text-[11.5px] sm:text-[13.5px] font-light leading-[1.25]">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white flex-shrink-0"></span>
                      <span className="drop-shadow-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          VISTA PC (lg:) - INTACTA SIN CAMBIOS
          ========================================= */}
      <section 
        className="hidden lg:flex relative w-full py-20 md:py-28 font-principal bg-cover bg-center bg-no-repeat min-h-[850px] items-center overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793087593/a90tdsuvgg48vd4y6e0d.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black/10 md:bg-gradient-to-r md:from-transparent md:to-[#86685f]/60"></div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 flex justify-end">
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
    </>
  );
};

export default TratamientosEstetica;